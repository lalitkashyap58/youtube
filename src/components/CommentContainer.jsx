import React from 'react'
import Comment from './Comment'

const CommentContainer = () => {
    const commentData=[{
        name:"Bheem from Dholakpur",
        text:"Dholakpur ka wasi", 
        replies:[
            { name:"Kirmada ",
            text:"kaun kaun bachayega inn sab ko bheem",
            replies:[
  

            ]

            },

        ]
    },
{ name:"Power Rangers Spd",
text:"Spd power up haa",
replies:[{
    name:"AAM Log",
    text:"jitna time tum log costume change krne mein lagate ho ,usee jyada jaldi toh SBI mein lunch ho jata hai",
    replies:[
        {        name:"Power Rangers Spd",
     text:"hn toh SBI walo ko kaunsa Tv pr aana hota h",
     replies:[
        
     ]

        }


    ]
}

]

},
{
    name:"Ben 10 ",
    text:"Fourrr Arrmmmmmmmmmmms",
    replies:[
        {
            name:"parents from earth",
            text:"arre bhai bas kro , yahan bacche Allen ki jagah ALien mein interest dikhane lge hn",
            replies:[

            ]
        }
       
    ]
},
{
    name:"Shinchan",
    text:"Aree Nanako Didi aap kaha Ja rhe ho"
}]


const CommentsList = ({ data }) => {
    return (
      <div>
        {data.map((comment, index) => (
          <div key={index}>
            <Comment data={comment} />
            {comment.replies && comment.replies.length > 0 && (
              <div className='pl-5 border border-l-black ml-5'>
                <CommentsList data={comment.replies} />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };


  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold '>Comments:</h1>
  <CommentsList data={commentData}/>
    </div>
  )
}

export default CommentContainer