import Link from 'next/link'

export default function Navbar({selected}) {

    return (
        <div class="flex justify-between container">
            <div class="ml-20">
                <Logo/>
            </div>
            <div class="flex items-center">
                <NavItem selected={selected==0} value={'Create'} path={'/create'}/>
                <NavItem selected={selected==1} value={'Discover'} path={'/discover'}/>
                <NavItem selected={selected==2} value={'Profile'} path={'/profile'}/>
            </div>
        </div>
    )

}

function NavItem({value, path, selected}) {
    var styles = "font-header text-lg mx-8 cursor-pointer"
    if (selected) {
        styles += " border-b-2 border-primary"
    }
    return <Link href={path}>
        <div class={styles}>{value}</div>
        </Link>
}

function Logo() {
    return <Link href={'/'}>
        <div class="bg-primary shadow-bold p-5 font-body font-bold text-3xl cursor-pointer"> {'Appaloosa'}</div>
    </Link>
}