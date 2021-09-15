import Image from 'next/image'
import profilePic from '../../public/me.jpg'

export default function Post(
    {
        creator: { name },
        education: {school, major},
        createdAt,
        body
    }) {
    return (
        <div class="shadow-black text-center bg-white p-10 my-10 m-auto w-full">
            <div class="m-auto font-header text-2xl">
                {name}
            </div>
            <div class="rounded-full m-auto my-5 w-28 h-28">
                <Image class="rounded-full" layout="responsive" src={profilePic}></Image>
            </div>
            <div class="m-auto">{major}, {school}</div>
            <div class="m-auto mb-6">3d</div>
            {body.split('\\n').map((paragraph) => <div key={paragraph} class="m-auto mb-4">{paragraph}</div>)}
            <hr/>
            <div class="mt-6 mx-auto font-bold cursor-pointer">
                {'Message'}
            </div>
        </div>
    )

}