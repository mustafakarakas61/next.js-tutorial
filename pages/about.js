import Link from "next/link";

export default function About() {
    return (
        <>
            <h1>The About Page</h1>
            <p>This is the about content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar purus
                eget convallis fermentum. Sed vel sollicitudin velit, at cursus ante. Sed non nunc nec dolor tincidunt
                ultrices et ut lectus. Nullam eleifend finibus lorem, ut congue dui tristique facilisis. Proin a
                vulputate lacus. Pellentesque felis metus, iaculis eget dolor vel, commodo euismod tellus. Nunc rhoncus
                enim quam, ac aliquam ipsum pulvinar sed. Donec leo est, lobortis eget risus sit amet, aliquet iaculis
                ante. Proin rhoncus massa consequat elit congue varius. Phasellus eu est id mi feugiat efficitur.</p>
            <Link href="/">back to homepage</Link>
        </>
    )
}