import { PropTypes } from 'prop-types';



const SectionDivider = (props) => {
  const language = props.language;
  const section = props.section;

  return (
    <>
      {language === 'english' ?
        <div className="page-description-container column">
          {section === 'resources' ?
            <>
              <h2>EXPLORE RESOURCES</h2>
              <p>Here you will find resources, organizations and tools  to support you in understanding and advocating for your rights. </p>
            </>
            :
            <>
              <h2>LEARN MORE</h2>
              <p>{`Read more about Reuben's practice`}</p>
            </>

          }
      </div>
        :
        <div className="page-description-container column">
          <h2>EXPLORAR RECURSOS</h2>
          <p>Aquí encontrará recursos, organizaciones y herramientas que le ayudarán a comprender y defender sus derechos. </p>
        </div>
      }
    </>
  )
}

SectionDivider.propTypes = {
  language: PropTypes.string,
  text: PropTypes.string
}

export default SectionDivider;
