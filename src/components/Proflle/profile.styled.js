import styled from 'styled-components';


export const ProfileWrap = styled('div')(() => {
    return {
        display: 'block',
        width: '400px',
        borderColor: 'grey',
        boxShadow: `0px 0px 5px 0px #000`,
        borderRadius: '10px',
        margin: 'auto',
        marginBottom: '40px',
        color: '#9c9b9b',
    }
})


export const Description = styled('div')(() => {
    return {
        display: 'block',
        width: '100%',
        margin: 'auto',
        padding: '12px',
        textAlign: 'center'

    }
})

export const Fhoto = styled('img')(() => {
    return {
        display: 'block',
        width: '70%',
        margin: 'auto',
        borderRadius: '50%',
        backgroundColor: 'rgba(173, 216, 230, 0.5)'
    }
})

export const UserName = styled('p')(() => {
    return {
        fontSize: '20px',
        fontWeight: '700',
        color: 'black'
    }
})

export const StatsList = styled('ul')(() => {
    return {
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '0',
        padding: '0',
        listStyle: 'none',
        backgroundColor: '#f0f0f0',
    }
})

export const StatsItem = styled('li')(() => {
    return {
        flex: "1",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #ccc',
        paddingTop: '25px',
        paddingBottom: '25px'
    }
})

export const Quantity = styled('span')(() => {
    return {
        fontSize: '20px',
        fontWeight: '700',
        color: 'black'
    }
})