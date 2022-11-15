import '../styles/App.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Form = ({setAlert, phone, setPhone}) => {

    const sendPhone = () => {
      fetch('http://localhost:3000/api',{method:'post', body: JSON.stringify({phone: phone})}).then(res => {
        res.json().then(body => {
          if(res.status > 200){
            return setAlert({saverity: 'error', title: body.title})
          }
          return setAlert({saverity: 'success', title: body.title})
        })
      })
    }

    return(<div className='formContainer'> 
    <input 
    onChange={event => setPhone(event.target.value)}
    value={phone}
    type={'number'} 
    id={'phoneInput'} 
    placeholder={'Ваш номер...'} 
    autoComplete="off"/>
    <button 
    disabled={false} 
    title={'ЗАКАЗАТЬ'} 
    type={'submit'} 
    id={'phoneSubmit'} 
    onClick={() => phone.length ? sendPhone() : setAlert({saverity: 'warning', title: 'Поле не может быть пустым'})}>
      <a id={'submitText'}>
        ЗАКАЗАТЬ <FontAwesomeIcon icon={faArrowRight} />
      </a>
    </button>
  </div>)
}

export default Form;