import { PropTypes } from 'prop-types';

const SingleResource = (props) => {
  const language = props.language;
  const titleEn = props.title.english;
  const titleEs = props.title.español;
  const bodyEn = props.body.english;
  const bodyEs = props.body.español;
  const imageUrl = props.imageUrl;
  const url = props.url;

  return (
    <>
      <img src={`${imageUrl}`}/>
      {language === 'english' ?
      <>
      <h1>{titleEn}</h1>
      <p>{bodyEn}</p>
      <a href={`${url}`}>Visit Website</a>
      </>
      :
      <><h1>{titleEs}</h1>
      <p>{bodyEs}</p>
      <a href={`${url}`}>Visit Website</a></>
    }

    </>
  )
}

SingleResource.propTypes = {
  language: PropTypes.string,
  title: PropTypes.object,
  body: PropTypes.object,
  english: PropTypes.string,
  español: PropTypes.string,
  imageUrl: PropTypes.string,
  url: PropTypes.string
}

export default SingleResource;
