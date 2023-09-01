import styled from 'styled-components';

export const FrendListWrap = styled('ul')(() => {
    return {
        display: 'block',
        margin: '0 auto',
        width: '320px',
        padding: '0'
    }
})

export const Frend = styled('li')(() => {
    return {
        display: 'flex',
        alignItems: 'center',
        borderColor: 'grey',
        boxShadow: `0px 0px 5px 0px #000`,
        borderRadius: '10px',
        marginBottom: '20px',
        padding: '16px',
        justifyContent: 'start',
        gap: '20px',
        fontSize: '20px',
        fontWeight: '500'
    }
})

export const Status = styled('span')(({ isOnline }) => {
    return {
        display: 'block',
        width: '20px',
        height: '20px',
        backgroundColor: isOnline ? 'green' : 'red',
        borderRadius: '50%',

    }
})

