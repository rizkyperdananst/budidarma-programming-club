import AboutImage from '../assets/img/about.jpg';

const About = () => {
    return (
        <div className="grid grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1 justify-center items-center gap-4 p-28" id='about'>
            <div>
                <h1 className="text-3xl font-semibold mb-2">Tentang Kami</h1>
                <p>Budidarma Programming Cub adalah tempat yang tepat untuk memulai perjalanan Anda dalam dunia pemrograman. Kami menawarkan kursus berkualitas dan pelatihan intensif yang akan membantu Anda menguasai keterampilan pemrograman.</p>
            </div>
            <div>
                <img src={AboutImage} alt="About We" className='object-cover rounded-md shadow max-md:none' />
            </div>
        </div>
    )
}

export default About;