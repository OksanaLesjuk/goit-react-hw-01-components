import styled from 'styled-components';
import getRandomHexColor from './random-color';


export const StatisticsWrap = styled('section')(() => {
    return {
        display: 'block',
        width: '400px',
        borderColor: 'grey',
        boxShadow: `0px 0px 5px 0px #000`,
        borderRadius: '10px',
        margin: 'auto',
        marginBottom: '40px',
        textAlign: 'center',
        overflow: 'hidden'
    }
})

export const StatisticsTitle = styled('h2')(() => {
    return {
        display: 'block',
        padding: "40px 80px",
        margin: '0'
    }
})

export const StatisticList = styled('ul')(() => {
    return {
        display: 'flex',
        margin: '0',
        paddingLeft: '0',
        color: 'white',



    }
})

export const StyledStatisicItem = styled('li')(() => {
    return {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '20px',
        paddingTop: '20px',
        border: '1px solid #ccc',
        backgroundColor: getRandomHexColor()

    }
})
export const Percentage = styled('span')(() => {
    return {
        fontSize: '20px',
        fontWeight: '700'
    }

})
