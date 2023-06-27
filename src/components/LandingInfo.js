import {getDatabase, ref, onValue, query, orderByChild, startAt, get} from "firebase/database";
import { useEffect, useState } from "react";

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

function PremiseCount() {


    const [premiseCount, setPremiseCount] = useState(0);
    const [ownedCount, setOwnedCount] = useState(0);
    const [area, setArea] = useState(0);
    const [areaOwned, setOwnedArea] = useState(0);

    useEffect(() => {
        const db = getDatabase();
        const premisesRef = ref(db, "Premises");
        const propertiesQuery = query(
            ref(getDatabase(), 'Premises'),
            orderByChild('properties/ownerId'),
            startAt('')
        );


        // Read the premises count
        onValue(premisesRef, (snapshot) => {
            const premises = snapshot.val();
            const count = Object.keys(premises).length;
            setPremiseCount(count);

            let areasize = 0;
            snapshot.forEach((p) => {
                console.log(areasize)
                if (!isNaN(parseInt(p.val().properties.SHAPE_Area)))
                    areasize += parseInt(p.val().properties.SHAPE_Area)
            });
            setArea(areasize);
        });

        // Read the owners count
        onValue(propertiesQuery, (snapshot) => {
            const owners = snapshot.val();
            const count = Object.keys(owners).length;
            setOwnedCount(count);

            let areasize = 0;
            snapshot.forEach((p) => {
                console.log(areasize)
                if (!isNaN(parseInt(p.val().properties.SHAPE_Area)))
                    areasize += parseInt(p.val().properties.SHAPE_Area)
            });
            setOwnedArea(areasize);
        });
    }, []);

    const stats = [
        { label: 'Aantal leegstaande panden:', value: premiseCount },
        { label: 'Leegstaande oppervlakte:', value: formatNumber(area) },
        { label: 'Aantal leegstaande panden met owner:', value: ownedCount },
        { label: 'Leegstaande oppervlakte met owner:', value: formatNumber(areaOwned) },
    ];

    return (
        <div style={styles.container}>
            {stats.map((stat, index) => (
                <div key={index} style={styles.count}>
                    <div className="stat-label">{stat.label}</div>
                    <div className="stat-value">{stat.value}</div>
                </div>
            ))}
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        flexWrap: 'wrap',
    },
    count: {
        fontSize: '20px',
        paddingBottom: '30px',
        fontWeight: 'bold',
        width: "50%"
    },
};

export default PremiseCount;
