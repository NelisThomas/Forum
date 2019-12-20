import React from 'react';
import {MdEdit,MdDelete} from 'react-icons/md';
import {isImg} from '../services';
import '../../style/Post.css';

const Post = ({post, removePost, editPost}) => {
    
    const {name,title,text,url,_id} = post;

    return(
        <div className='PostWrapper'>
            <div className='Post'>
                <span className='PostNameSpan'>Posted by {name}</span>
                <div className='PostTextContainer'>
                    <span className='PostTitleSpan'>{title}</span>
                    {text !== '' && (
                        <div className='PostTextDiv'>
                            {text}
                        </div>
                    )}
                </div>
                {url !== '' && (
                    <div className='PostURLContainer'>
                        {isImg(url) ? (
                            <img
                                className='PostURLImg'
                                alt={title}
                                src={url}
                            />
                        ) : (
                            <a href={url}>{title}</a>
                        )}
                    </div>
                )}
            </div>
            <div className='PostButtonContainer'>
                <div className='PostButtonEdit'>
                    <MdEdit
                        onClick={() => editPost()}
                    />
                </div>
                <div className='PostButtonDelete'>
                    <MdDelete
                        onClick={() => removePost()}
                    />
                </div>
            </div>
        </div>
    )
}

export default Post;