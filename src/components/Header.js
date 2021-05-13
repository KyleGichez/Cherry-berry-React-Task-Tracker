import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,onAdd,showAdd}) => {
    return (
        <header className ='header'>
            <h1>
                {title}
            </h1>
            <Button color={showAdd ? 'blueviolet' : ''}text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
           
            
        </header>
    )
}
Header.defaultProps ={
    title:'Task Tracker'
}
Header.propTypes ={
    title:PropTypes.string,
}
//Css in JS
//const headingStyle={
    //color:'blueviolet',
    //backgroundColor:'fuchsia'
//}
export default Header

