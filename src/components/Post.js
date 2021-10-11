import React from 'react'
import marked from 'marked'
const { DateTime } = require("luxon");

const Post = ({ article }) => {
    const addZero = (value) => {
        if (Math.abs(value) < 10)
            return (value = "0" + value) // dirty hack - mixes up string and integer
        else return value
    }

    console.log(article);
    const { name, featureImage, description, lastUpdated } = article.fields;
    const postDescription = marked(description);
    const timestamp = {
        hour: addZero(DateTime.fromISO(lastUpdated).hour),
        minute: addZero(DateTime.fromISO(lastUpdated).minute),
        second: addZero(DateTime.fromISO(lastUpdated).second),
        year: addZero(DateTime.fromISO(lastUpdated).year),
        month: addZero(DateTime.fromISO(lastUpdated).month),
        day: addZero(DateTime.fromISO(lastUpdated).day),

    }

    return (
        <div className={'post'}>
            <h2 className={'title'}>{name}</h2>
            {featureImage && <img className='featureImage' src={featureImage.fields.file.url} alt={name} title={name} />}
            <section dangerouslySetInnerHTML={{ __html: postDescription }} />
            {lastUpdated && <p>Last updated: {timestamp.year}/{timestamp.month}/{timestamp.day} {timestamp.hour}:{timestamp.minute}:{timestamp.second}</p>}

        </div>
    )
}

export default Post
