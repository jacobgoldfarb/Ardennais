import Head from 'next/head'
import Navbar from '../navbar'
import { useCallback, useState } from 'react'
import { createPost } from '../../utils/posts'

export default function Discover() {
  const [tags, setTags] = useState(
    [
      { text: 'Cryptocurrency', selected: false, key: "crypto"}, 
      { text: 'Consumer', selected: false, key: "consumer"}, 
      { text: 'B2B', selected: false, key: "b2b"},
      { text: 'University of Waterloo', selected: false, key: "uw"},
      { text: 'Cryptocurrency', selected: false, key: "E"}, 
      { text: 'Consumer', selected: false, key: "F"}, 
      { text: 'B2B', selected: false, key: "G"},
      { text: 'University of Waterloo', selected: false, key: "H"},
      { text: 'Cryptocurrency', selected: false, key: "I"}, 
      { text: 'Consumer', selected: false, key: "J"}, 
      { text: 'B2B', selected: false, key: "K"},
      { text: 'University of Waterloo', selected: false, key: "L"},
    ]
  )
  const [selectedTags, setSelectedTags] = useState([])
  const [description, setDescription] = useState("")

  const updateSelectedTag = useCallback(
    (selectedTag) => {
      var selectedTagIndex = tags.findIndex((tag) => tag.key == selectedTag.key)
      // Tag will be selected
      if  (!selectedTag.selected) {
        selectedTags.push(selectedTag)
        setSelectedTags([...selectedTags])
      // Tag will be unselected
      } else {
        var index = selectedTags.findIndex((tag) => tag.key == selectedTag.key)
        selectedTags.splice(index, 1)
        setSelectedTags([...selectedTags])
      }
      tags[selectedTagIndex].selected = !tags[selectedTagIndex].selected
      setTags([...tags])
    },
    [tags, setTags],
  );

  const updateDescription = useCallback((event) => {
      setDescription(event.target.value)
  }, [setDescription])

  const handleSubmit = useCallback(() => {
    const createdAt = new Date()
    createPost({ 
      body: description, 
      tags: selectedTags.map((tag) => tag.key),
      creator: {
        name: "Jacob"
      },
      education: {
        school: "UW",
        major: "Science",
      },
      createdAt: createdAt,
    })
  }, [description, selectedTags])

  return (
    <div>
      <Head>
        <title>Appaloosa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar selected={0}/>
      <div class="absolute bg-cover bg-repeat-y bg-digital-pattern w-full"
      style={{
        backgroundImage: `url('_next/static/image/public/digital_background.jpg')`
      }}>
        <div class="flex flex-col w-3/4 m-auto">
          <div class="shadow-black text-center bg-white p-10 my-10 m-20">
              <div class="m-auto font-header text-2xl">
                {'Description'}
              </div>
                {'Discuss your idea, background, your role and your progress thus far. Go into as much or as little detail as you’d like.'}
              <textarea value={description} onChange={updateDescription} class="mt-5 w-full h-80 bg-gray-200"></textarea>
              <div class="m-auto font-header text-2xl">
                {'Tags'}
              </div>
                {'Choose all tags relevant to your idea.'}
                <TagsContainers tags={tags} onSelect={updateSelectedTag}/>
              <div class="shadow-black mt-10 mx-auto w-1/4 font-header bg-gray-400 py-2 px-4 cursor-pointer justify-self-center"
              onClick={handleSubmit}>
                {'Submit'}
              </div>
          </div>
        </div>
      </div>
      <footer>
      </footer>
    </div>
  )
}

function TagsContainers({ tags, onSelect }) {  

  return (
      <div class="flex flex-wrap justify-center mt-5">
          { tags.map((tag) => {
              var style = "mx-4 my-2 py-2 px-4 border-4 cursor-pointer"
              style += tag.selected ? " bg-primary" : " bg-white"
             return (<div key={tag.key} class={style} onClick={() => onSelect(tag)}>{tag.text}</div>)
          })}
      </div>
  )

}