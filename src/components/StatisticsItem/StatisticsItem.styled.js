import styled from 'styled-components';
import getRandomHexColor from '../../helpers/random-color';

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