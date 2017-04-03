"use strict";

//Biography object (displayed in header section)
var bio = {
    "name": "Natalia Sierzputowska",
    "role": "Front-End Developer",
    "welcomeMessage": "This is my resume web page",
    "biopic": "images/portret.jpg",
    "contacts": {
        "mobile": "+48 555 55 55 55",
        "email": "sierzputin@email.com",
        "github": "https://github.com/sierzputin",
        "location": "Warsaw"
    },
    "skills": ["HTML", "CSS", "JavaScript", "Git"]
};

//Work object (displayed in Work experience section)
var work = {
    "jobs": [{
            "employer": "Armatis-Lc",
            "title": "IT Helpdesk Specialist",
            "location": "Warsaw",
            "dates": "2017",
            "description": "2nd line support for user problems with computers and sofware. Managing users, computers and updates through Active Direcotry and BMC Software."
        },
        {
            "employer": "nOvum Fertility Clinic",
            "title": "Junior Network Administrator",
            "location": "Warsaw",
            "dates": "2014 - 2016",
            "description": "Resolving IT problems and issues (1st and 2nd line support)for users concerning business, office and medicalapplications. Support for dedicated HIS system, RIWitness system and operating systems. Implementing new technologies Conducting courses for new systems, applications and functions. Administering Windows Server 2008 based servers. Development of HIS system: designing and planning new functionalities and improving existing ones."
        },
        {
            "employer": "Kraft Foods Poland",
            "title": "IT Analyst",
            "location": "Warsaw",
            "dates": "2011 - 2012",
            "description": "1st line support for EMEA internal clients(polish and English speaking users). Support for OS systems, mobiles and business and office applications. Incident management using Remedy."
        },
        {
            "employer": "Kraft Foods Poland",
            "title": "IT Specialist",
            "location": "Warsaw",
            "dates": "2007 - 2011",
            "description": "Resolving IT problems and issues (2nd line support)for users. Problems with MS software, Lotus notes and other business applications. Administering Windows 2003 based servers. Administering MS SQL servers and Lotus Domino Servers Assuring security for servers, based on Microsoft Operating Systems and middleware. Problem/Incident management using Manage Now, Maximo and other management tools."
        }
    ]
};

//Projects object (displayed in projects section)
var projects = {
    "projects": [{
            "title": "Portfolio",
            "dates": "2017",
            "description": "Web page with personal projects portfolio",
            "images": ["images/pro01_01.jpg", "images/pro01_02.jpg", "images/pro01_03.jpg"]
        },
        {
            "title": "Arcade Game",
            "dates": "2017",
            "description": "Online version of popular arcade Game called \"Frogger\"",
            "images": ["images/pro02_01.jpg", "images/pro02_02.jpg", "images/pro02_03.jpg", "images/pro02_04.jpg", "images/pro02_05.jpg"]
        },
        {
            "title": "Neighborhood map",
            "dates": "2017",
            "description": "Interactive map of interesting locations in neighborhood",
            "images": ["images/pro03_01.jpg"]
        }
    ]
};

//Education object (displayed in education section). Has two subobjects: schools and onlineCourses.
var education = {
    "schools": [{
            "name": "Polish-Japanese Institute of Information Technology",
            "location": "Warsaw, Poland",
            "degree": "n/a",
            "dates": "2001 - 2005",
            "url": "http://www.pja.edu.pl/",
            "majors": ["Computer Science", "2D Graphics"]
        },
        {
            "name": "Webster SD High School",
            "location": "Webster, SD, US",
            "degree": "n/a",
            "dates": "2000 - 2001",
            "url": "http://webster.k12.sd.us/home.html",
            "majors": ["n/a"]
        }
    ],
    "onlineCourses": [{
            "title": "Front-End Web Developer",
            "school": "Udacity",
            "dates": "02.2017 - 04.2017",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "title": "Intro to SQL",
            "school": "Udemy",
            "dates": "10.2016 - 11.2017",
            "url": "https://www.udemy.pl"
        }
    ]
};

//Display function for biography section (header)
bio.display = function() {
    if (bio.name) {
        $("#header").append(HTMLheaderName.replace("%data%", bio.name));
    }

    if (bio.role) {
        $("#header").append(HTMLheaderRole.replace("%data%", bio.role));
    }

    if (bio.contacts) {
        if (bio.contacts.mobile) {
            $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
            $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        }

        if (bio.contacts.email) {
            $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
            $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        }

        if (bio.contacts.github) {
            $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
            $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        }

        if (bio.contacts.location) {
            $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
            $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
        }
    }

    if (bio.biopic) {
        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    }

    if (bio.welcomeMessage) {
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    }

    if (bio.skills) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            $("#skills").append(HTMLskills.replace("%data%", skill));
        });
    }
};

//Display function for work experience section
work.display = function() {
    if (work.jobs) {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);

            if (job.employer && job.title) {
                $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title));

                if (job.dates) {
                    $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
                }

                if (job.location) {
                    $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
                }

                if (job.description) {
                    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
                }
            }
        });
    }
};

//Display function for projects section
projects.display = function() {
    if (projects.projects) {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            if (project.title) {
                $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
            }

            if (project.dates) {
                $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
            }

            if (project.description) {
                $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
            }

            if (project.images) {
                project.images.forEach(function(img) {
                    $(".project-entry:last").append(HTMLprojectImage.replace("%data%", img));
                });
            }
        });
    }
};

//Display function for education section
education.display = function() {

    //Display schools in projects section
    if (education.schools) {
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);

            if (school.name) {
                $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name).replace("#", school.url));
            }

            if (school.degree) {
                $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", school.degree));
            }

            if (school.dates) {
                $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
            }

            if (school.location) {
                $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
            }

            if (school.majors) {
                school.majors.forEach(function(major) {
                    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", major));
                });
            }
        });
    }

    //Display online courses in projects section
    if (education.onlineCourses) {
        $(".education-entry:last").append(HTMLonlineClasses);

        education.onlineCourses.forEach(function(course) {
            if (course.title) {
                $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url));
            }

            if (course.school) {
                $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", course.school));
            }

            if (course.dates) {
                $(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
            }

            if (course.url) {
                $(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url).replace("#", course.url));
            }

        });
    }

};

/*
//Function for international name display
function inName(name){
    var names = name.split(" ");
    var first = names[0].charAt(0).toUpperCase() + names[0].slice(1).toLowerCase();
    var last = names[1].toUpperCase();
    return first+" "+last;
}

$("#main").append(internationalizeButton);
$(document).click(function(loc) {
   logClicks(loc.pageX,loc.pageY);
});
*/

//Run all functions to display content
bio.display();
work.display();
projects.display();
education.display();

//Display map
$("#mapDiv").append(googleMap);