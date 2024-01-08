import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

const EmailContactDropdown = (props) => {

  const language = props.language;
  const initialSubject = () => language === 'english' ? 'Select a subject:' : 'Seleccione un tema:'
  const [subject, setSubject] = useState(initialSubject);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  }
  const handleSubject = (e) => {
    setSubject(e.target.innerText);
    setOpen(false)
  }

  useEffect(()=>{
    setSubject(subject)
  },[subject, open, language])



  return (
      <div className="email-form-dropdown">
        {language === 'english' ?
          <>
           <p onClick={handleOpen}>{open ? null : subject}</p>
          {open ?
            <div className="email-dropdown-menu">
              <div className="email-dropdown-item" onClick={handleSubject}>
                Request a free consultation
              </div>

              <div className="email-dropdown-item" onClick={handleSubject}>
                General Information
              </div>
            </div>
            : null
          }
          </>
          :
          <>
           <p onClick={handleOpen}>{open ? `Seleccione un tema:` : subject}</p>
          {open ?
            <>
              <div onClick={handleSubject}>
              Solicite una consulta gratuita
              </div>

              <div onClick={handleSubject}>
              Información general
              </div>
            </>
            : null
          }
          </>
          }

      </div>
  )
}
EmailContactDropdown.propTypes = {
  language: PropTypes.string
}

export default EmailContactDropdown
