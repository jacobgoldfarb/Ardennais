import Head from 'next/head'
import Navbar from '../navbar'
import Image from 'next/image'
import profilePic from '../../public/me.jpg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Appaloosa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar selected={2} />
      <div class="absolute bg-cover bg-repeat-y bg-digital-pattern w-full"
        style={{
          backgroundImage: `url('_next/static/image/public/digital_background.jpg')`
        }}>
        <ProfileHead />
        <AboutMeSection />
        <ExperienceSection />
      </div>
      <footer>
      </footer>
    </div>
  )
}


function ProfileHead() {
  return (
    <div class="flex flex-col w-3/4 m-auto">
      <div class="shadow-black text-center bg-white p-5 my-10 m-20">
        <EditButton />
        <div class="m-auto font-header text-2xl">
          {'Jerry Hughes'}
        </div>
        <div class="rounded-full m-auto my-5 w-28 h-28">
          <Image class="rounded-full" layout="responsive" src={profilePic}></Image>
        </div>
        <div class="m-auto font-header text-2xl">
          {'University of Waterloo'}
          <br />
          {'Systems Design Engineering (2022)'}
        </div>
      </div>
    </div>
  )
}

function AboutMeSection() {
  return (
    <div class="flex flex-col w-3/4 m-auto">
      <div class="shadow-black text-center bg-white p-5 my-10 m-20">
        <EditButton />
        <div class="m-auto font-header text-2xl">
          {'About Me'}
        </div>
        {'Currently, I’m working on the project with my friend who is also at UW studying computer engineering. I’m looking for one more technical cofounder, ideally with background in creating real time trading platforms, but more importantly with a keen interest in the problem  space.'}
      </div>
    </div>
  )
}

function ExperienceSection() {
  return (
    <div class="flex flex-col w-3/4 m-auto">
      <div class="shadow-black text-center bg-white p-5 my-10 m-20">
        <EditButton />
        <div class="m-auto font-header text-2xl">
          {'Experience'}
        </div>
        <div class="m-auto font-header">
          {'University of Waterloo'}
          <br />
          {'Systems Design Engineering (2022)'}
        </div>
      </div>
    </div>
  )
}

function EditButton({onClick}) {
  return (
    <div class="shadow-black2 ml-auto w-20 bg-gray-400 cursor-pointer"
      onClick={onClick}>
      {'Edit'}
    </div>
  )
}

