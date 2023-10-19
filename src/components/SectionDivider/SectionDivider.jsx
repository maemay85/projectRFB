import { PropTypes } from 'prop-types';



const SectionDivider = (props) => {
  const language = props.language;
  const section = props.section;

  return (
    <>
          {section === 'resources' ?
            <div id='explore-resources'>
              <div className="section-divider column">
                {language === 'english' ?
                  <>
                    <h2>EXPLORE RESOURCES</h2>
                    <p>Here you will find resources about protecting the housing rights of tenants in New York City. There is a curated list of organizations, websites, and databases which will support you in understanding and advocating for your rights.</p>
                  </>
                  :
                  <>
                    <h2>EXPLORAR RECURSOS</h2>
                    <p>{`Aquí encontrará recursos sobre cómo proteger los derechos de vivienda de los inquilinos en la ciudad de Nueva York. Existe una lista seleccionada de organizaciones, sitios web y bases de datos que le ayudarán a comprender y defender sus derechos.`}</p>
                  </>
                }
                <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/Arrow.svg" />
              </div>
            </div>
            :
            <div id='learn-more'>
              <div className='section-divider column'>
                {language === 'english' ?
                  <>
                    <h2>LEARN MORE</h2>
                    <p>{`Read more about Reuben's practice`}</p>
                  </>
                  :
                  <>
                    <h2>{`APRENDE MÁS`}</h2>
                    <p>{`Leer más sobre la práctica de Reuben`}</p>
                  </>
                }
                <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/Arrow.svg" />
              </div>
            </div>

          }
    </>
  )
}

SectionDivider.propTypes = {
  language: PropTypes.string,
  section: PropTypes.string
}

export default SectionDivider;
