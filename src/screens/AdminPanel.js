import {Admin, Resource, CustomRoutes, Layout} from 'react-admin';
import LoginPage from "./Login";
import {get, getDatabase, ref, remove, update, equalTo, query, orderByChild} from "firebase/database";
import {authProvider} from "../components/authProvider";
import {Dashboard} from "./Dashboard";
import {UserCreate, UserEdit, UserList} from "../components/Users";
import {PremiseCreate, PremiseEdit, PremiseList} from "../components/Premises";
import {MyAppBar} from "../components/MyAppBar";
import {MyMenu} from "../components/MyMenu";
import {ApprovalRequestList} from "../components/ApproveRequests";
import UserIcon from '@mui/icons-material/People';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import TaskIcon from '@mui/icons-material/Task';
import ForumIcon from '@mui/icons-material/Forum';
import { MessageList} from "../components/Messages";
import dutchMessages from "../components/Translations";

const dataProvider = {
    getList: async (resource, params) => {
        const snapshot = await get(ref(getDatabase(), resource));
        const data = snapshot.val();
        if (!data) {
            return { data: [], total: 0 };
        }

        // Add 'id' field to each item in the data array
        const dataWithId = Object.keys(data).map(key => ({
            id: key,
            ...data[key],
        }));

        // Apply sorting
        const { field, order } = params.sort;
        dataWithId.sort((a, b) => {
            // Handle empty values
            if (a[field] === undefined || a[field] === null || a[field] === '') {
                return order === 'ASC' ? -1 : 1;
            } else if (b[field] === undefined || b[field] === null || b[field] === '') {
                return order === 'ASC' ? 1 : -1;
            }

            // Perform comparison
            if (a[field] < b[field]) {
                return order === 'ASC' ? -1 : 1;
            } else if (a[field] > b[field]) {
                return order === 'ASC' ? 1 : -1;
            } else {
                return 0;
            }
        });

        // Calculate pagination values
        const page = params.pagination.page;
        const perPage = params.pagination.perPage;
        const start = (page - 1) * perPage;
        const end = start + perPage;

        const paginatedData = dataWithId.slice(start, end);
        const total = dataWithId.length;

        return { data: paginatedData, total: total };
    },
    getOne: async (resource, params) => {
        const data = params;
        return { data };
    },
    getMany: async (resource, params) => {
        const { ids } = params;
        const items = await Promise.all(
            ids.map(async (id) => {
                const snapshot = await get(ref(getDatabase(), `${resource}/${id}`));
                return { id: snapshot.key, ...snapshot.val() };
            })
        );
        return { data: items };
    },
    getManyReference: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const fieldRef = `${params.target}`;

        const queryRef = query(
            ref(getDatabase(), resource),
            orderByChild(fieldRef),
            equalTo(params.id)
        );

        const snapshot = await get(queryRef);
        const data = snapshot.val();
        if (!data) {
            return { data: [], total: 0 };
        }

        const ids = Object.keys(data);
        const sortedIds = ids.sort((a, b) => {
            const fieldA = data[a][field];
            const fieldB = data[b][field];

            if (typeof fieldA === 'string' && typeof fieldB === 'string') {
                return order === 'ASC' ? fieldA.localeCompare(fieldB) : fieldB.localeCompare(fieldA);
            }

            return order === 'ASC' ? fieldA - fieldB : fieldB - fieldA;
        });
        const start = (page - 1) * perPage;
        const end = page * perPage;
        const paginatedIds = sortedIds.slice(start, end);
        let records = paginatedIds.map(id => ({ ...data[id], id }));
        if (resource == 'Premises')
            records = paginatedIds.map(id => ({ ...data[id], address: `${data[id].properties.pva_straat} ${data[id].properties.pva_huisnr1}${data[id].properties.pva_huisnr2 ? ' ' + data[id].properties.pva_huisnr2 : ''}, ${data[id].properties.pva_postcode}`, id }));

        const total = ids.length;

        return { data: records, total };
    },
    create: async (resource, params) => {
        const { data } = params;
        const newRef = getDatabase().ref(resource).push();
        await newRef.set(data);
        return { data: { ...data, id: newRef.key } };
    },
    update: async (resource, params) => {
        let { id, data } = params;
        const refPath = `${resource}/${id}`;
        const refToUpdate = ref(getDatabase(), refPath);

        if (Object.keys(data).some(item => 'properties' === item)) {
            const originalData = (await get(refToUpdate)).val()
            Object.keys(data.properties).map((key) => originalData.properties[key] = data.properties[key]);
            data=originalData;
        }

        await update(refToUpdate, data);
        const updatedData = await get(refToUpdate).then(snapshot => snapshot.val());
        return { data: { ...updatedData, id } };
    },
    delete: async (resource, params) => {
        const refToDelete = ref(getDatabase(), `${resource}/${params.id}`);
        const snapshot = await get(refToDelete);
        const previousData = snapshot.val();
        await remove(refToDelete);
        return { data: previousData };
    },
    deleteMany: async (resource, params) => {
        const { ids } = params;
        const deletePromises = ids.map(id => remove(ref(getDatabase(), `${resource}/${id}`)));
        await Promise.all(deletePromises);
        return { data: ids };
    },
};

const i18nProvider = {
// required
    translate: (key, options) => {
        key = key.split('.')
        try {
            if (key.length == 3 && Object.keys(dutchMessages.ra).some(item => key[1] === item)) {
                let result = dutchMessages[key[0]][key[1]][key[2]].replaceAll();
                if (options) Object.keys(options).map((key) => result = result.replace(`%{${key}}`, options[key]));
                return result;
            }
        } catch {}
            const translations = {
                'resources.Users.name': 'Gebruikers',
                'resources.Users.empty': 'Geen gebruikers gevonden',
                'resources.Premises.name': 'Panden',
                'resources.Premises.empty': 'Geen panden gevonden',
                'resources.ApproveRequests.name': 'Verzoeken',
                'resources.ApproveRequests.empty': 'Geen goedkeuringsverzoeken gevonden',
                'resources.Messages.name': 'Berichten',
                'resources.Messages.empty': 'Geen berichten gevonden',
            };

        if (Object.keys(translations).some(item => key.join('.') === item))
            return translations[key.join('.')];

        return key[key.length-1];
    },
    changeLocale: locale => Promise.resolve(),
    getLocale: () => 'nl',
};

export const AdminPanel = () => (
    <Admin loginPage={LoginPage} dataProvider={dataProvider} i18nProvider={i18nProvider} authProvider={authProvider} layout={(props) => <Layout {...props} appBar={MyAppBar} menu={MyMenu}/>} dashboard={Dashboard}>
        <Resource name="Users" recordRepresentation={() => ``} list={UserList} edit={UserEdit} icon={UserIcon} />
        <Resource name="Premises" recordRepresentation={() => ``} list={PremiseList} create={PremiseCreate} edit={PremiseEdit} icon={MapsHomeWorkIcon} />
        <Resource name="ApproveRequests"  recordRepresentation={() => ``} list={ApprovalRequestList} icon={TaskIcon} />
        <Resource name="Messages"  recordRepresentation={() => ``} list={MessageList} icon={ForumIcon} />
    </Admin>
);