import Head from 'next/head'
import Navbar from '../navbar'
import Post from './post'
import TagsContainer from '../shared/tagsContainer'
import { useEffect, useState, useCallback } from 'react'
import { getPosts } from '../../utils/posts'

export default function Discover() {

  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [tags, setTags] = useState(
    [
      { text: 'Cryptocurrency', selected: false, key: "crypto"}, 
      { text: 'Consumer', selected: false, key: "consumer"}, 
      { text: 'B2B', selected: false, key: "b2b"},
      { text: 'University of Waterloo', selected: false, key: "uw_canada"}
    ]
  )

  const updateSelectedTag = useCallback(
    (selectedTag) => {
      var selectedTagIndex = tags.findIndex((tag) => tag.key == selectedTag.key)
      tags[selectedTagIndex].selected = !tags[selectedTagIndex].selected
      var updatedFilteredPosts = []
      // Filter the collection where tag keys match the selected tag key.
      if (selectedTag.selected) {
        updatedFilteredPosts = filteredPosts.filter(((post) => post.tags.includes(selectedTag.key)))  
      } else {
        updatedFilteredPosts = filteredPosts.concat(posts.filter(((post) => !post.tags.includes(selectedTag.key))))
      }
      setFilteredPosts(updatedFilteredPosts)
      setTags([...tags])
    },
    [tags, filteredPosts, setTags, setFilteredPosts],
  );

  useEffect(async () => {
    const newPosts = await getPosts()
    setPosts(newPosts)
    setFilteredPosts(newPosts)
  }, [setPosts, setFilteredPosts])

  return (
    <div>
      <Head>
        <title>Appaloosa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar selected={1}/>
      <div class="absolute bg-cover bg-repeat-y bg-digital-pattern w-full bg-contain"
      style={{
        backgroundImage: `url('_next/static/image/public/digital_background.jpg')`
      }}>
        <TagsContainer tags={tags}
          onSelect={updateSelectedTag}
        />
        <div class="flex flex-col w-1/2 m-auto">
          {filteredPosts && <> 
            { filteredPosts?.map(({creator, education, createdAt, body}) => 
            <Post
              key={body}
              creator={creator}
              education={education}
              createdAt={createdAt}
              body={body}
            />)}
          </> }
        </div>
      </div>
      <footer>
      </footer>
    </div>
  )
}
