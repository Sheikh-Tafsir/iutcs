
const facultyData = [
    {
        name: 'Prof. Dr. Mohammad Rafiqul Islam',
        division: 'Chief Patron',
        title: 'Vice Chancellor, IUT',
        image: 'faculty_body/VC.jpg',
    },
    {
        name: 'Dr. Omar Jah',
        division: 'Patron',
        title: 'Pro Vice Chancellor, IUT',
        image: 'faculty_body/PVC.jpg',
    },
    {
        name: 'Dr. Abu Raihan Mostofa Kamal',
        division: 'Chairman',
        title: 'Professor and Head of the Department,CSE',
        image: 'faculty_body/Raihan.jpg',
    },
    {
        name: 'Dr. Hasan Mahmud',
        division: 'Moderator',
        title: 'Associate Professor, CSE',
        image: 'faculty_body/HM.jpg',
    },
    {
        name: 'Sabbir Ahmed',
        division: 'Advisor',
        title: 'Associate Professor,CSE',
        image: 'faculty_body/SA.jpg',
    },
    {
        name: 'Imtiaj Ahmed Chowdhury',
        division: 'Advisor',
        title: 'ecturer,CSE',
        image: 'faculty_body/ImtiajSir.jpg',
    },
    {
        name: 'Ali Abir Shuvro',
        division: 'Advisor',
        title: 'ecturer,CSE',
        image: 'faculty_body/AS.jpg',
    },
    {
        name: 'Maliha Noushin Raida',
        division: 'Advisor',
        title: 'Lecturer,CSE',
        image: 'faculty_body/Raidamiss.jpg',
    },
    {
        name: 'Asaduzzaman Herok',
        division: 'Advisor',
        title: 'Lecturer,CSE',
        image: 'faculty_body/Herok.jpg',
    },
    {
        name: 'MD Atiqur Rahman',
        division: 'Advisor',
        title: 'Lecturer,CSE',
        image: 'faculty_body/Atiq Sir.jpg',
    },
    {
        name: 'Farzana Tabassum',
        division: 'Advisor',
        title: 'Lecturer,CSE',
        image: 'faculty_body/Farzana.jpg',
    },


];

const studentData = [
    {
        name: 'Alif Arshad',
        division: 'Administration',
        title: 'President',
        image: 'student_body/Alif Arshad.JPG',
    },
    {
        name: 'Tanvir Saikat',
        division: 'Administration',
        title: 'Vice President (Management)',
        image: 'student_body/Tanvir Hossain Saikat.jpeg',
    },
    {
        name: 'Shariar Mahmud',
        division: 'Administration',
        title: 'Vice President (Finance)',
        image: "student_body/Shahriar Mahmud.jpg",
    },
    {
        name: 'Naimul Peal',
        division: 'Administration',
        title: 'Treasurer',
        image: 'student_body/Peal.jpg',
    },
    {
        name: 'Farhan Fuad',
        division: 'Administration',
        title: 'Moderator (Student Body)',
        image: "student_body/Farhan Fuad.jpg",
    },
    {
        name: 'Arafat Kabir Khan',
        division: 'Administration',
        title: 'Volunteer Coordinator',
        image: "student_body/Arafat .jpg",
    },
    {
        name: 'Faria Ahmed',
        division: 'Administration',
        title: 'Volunteer Coordinator',
        image: "student_body/Faria_Ahmed.jpg",
    },
    {
        name: 'Moudud Hasan',
        division: 'Event Management Executive',
        title: 'Volunteer Coordinator',
        image: "student_body/Moudud Hasan.png",
    },
    {
        name: 'Md Mohaymen Ul Anam',
        division: 'Event Management Executive',
        title: 'AI and Machine Learning',
        image: "student_body/MD Mohaymen Ul Anam.jpg",
    },
    {
        name: 'Sumit Alam Khan',
        division: 'Event Management Executive',
        title: 'CTF',
        image: "student_body/Sumit Alam Khan.jpeg",
    },
    {
        name: 'Navid Hasin Alvee',
        division: 'Event Management Executive',
        title: 'CHackathon',
        image: "student_body/Navid Hasin Alvee.jpg",
    },
    {
        name: 'Sajid Chowdhury',
        division: 'Event Management Executive',
        title: 'IT Business Case Study',
        image: "student_body/Sajid Chowdhury.jpg",
    },
    {
        name: 'MD. Ahnaf AKib',
        division: 'Event Management Executive',
        title: 'E-Sports',
        image: "student_body/Akib.jpg",
    },
    {
        name: 'H M Shadid Reza Chowdhury',
        division: 'Event Management Executive',
        title: 'E-Sports',
        image: "student_body/shadid.jpg",
    },
    {
        name: 'A.K.M. Rakinuzzaman',
        division: 'Event Management Executive',
        title: 'Olympiad',
        image: "student_body/A. K. M. Rakinuzzaman.jpg",
    },
    {
        name: 'Tasfia Tasneem Annesha',
        division: 'Event Management Executive',
        title: 'Olympiad',
        image: "student_body/Annesha Tasneem.jpg",
    },
    {
        name: 'Zaarin Anjum',
        division: 'Event Management Executive',
        title: 'Seminar and Workshop',
        image: "student_body/Zaarin Anjum.jpg",
    },
    {
        name: 'Rakin Abrar',
        division: 'Operations Executive',
        title: 'Logistics',
        image: "student_body/Rakin Abrar.jpg",
    },
    {
        name: 'Nafisa Tabassum Oeshy',
        division: 'Operations Executive',
        title: 'Logistics',
        image: "student_body/Nafisa Tabassum Oeshy.jpg",
    },
    {
        name: 'Reaz Hassan Joarder',
        division: 'Operations Executive',
        title: 'Design',
        image: "student_body/Reaz Hassan Joarder.jpg",
    },
    {
        name: 'Sherajul Arifin',
        division: 'Operations Executive',
        title: 'Design',
        image: "student_body/Sherajul Arifin.jpg",
    },
    {
        name: 'Alin Mohammad Sifayet',
        division: 'Operations Executive',
        title: 'Sponsor and Liaison',
        image: "student_body/Alin Mohammad Sifayet.jpg",
    },
    {
        name: 'Md. Sakibul Islam',
        division: 'Operations Executive',
        title: 'Design',
        image: "student_body/Md.Sakibul Islam.jpg",
    },
    {
        name: 'Suraiya Hasan',
        division: 'Operations Executive',
        title: 'Public relation',
        image: "student_body/Suraiya Hasan.jpeg",
    },
    {
        name: 'Anika Tahsin',
        division: 'Operations Executive',
        title: 'Photography and Digital Media',
        image: "student_body/Anika Tahsin.jpeg",
    },
    {
        name: 'Sidratul Tanzila Tasmi',
        division: 'Publication Executive',
        title: '',
        image: "student_body/Sidratul Tanzila Tasmi.jpg",
    },
    {
        name: 'Sakif Ahbab',
        division: 'Web Development Executive',
        title: '',
        image: "student_body/Sakif Ahbab.jpg",
    },
    {
        name: 'Md. Hasibul Hasan Rafit',
        division: 'Executive Secretary',
        title: 'Food and Refreshment',
        image: "student_body/Md. Hasibul Hasan Rafit.jpeg",
    },
    {
        name: 'Anik Imtiaj',
        division: 'Executive Secretary',
        title: 'Transport',
        image: "student_body/asif.jpg",
    },
    {
        name: 'Syem Aziz',
        division: 'Executive Secretary',
        title: 'Prize Management',
        image: "student_body/Syem Aziz.JPG",
    },
    {
        name: 'Lamiya Tahsin Orpa',
        division: 'Executive Secretary',
        title: 'Reception',
        image: "student_body/Lamiya Tahsin Orpa.jpg",
    },
    {
        name: 'Rahanuma Ryaan Ferdous',
        division: 'Executive Secretary',
        title: 'PR and Marketing',
        image: "student_body/Rahanuma Ryaan Ferdous.jpg",
    },
    {
        name: 'Sabry Said Sabry Ragab',
        division: 'International Student Executive',
        title: 'PR and Marketing',
        image: "student_body/Sabry Said Sabry Ragab .jpg",
    },
];

export { facultyData, studentData }
