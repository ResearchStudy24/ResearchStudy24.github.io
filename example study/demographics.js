define(['questAPI'], function(Quest){

	var API = new Quest();
	var isTouch = API.getGlobal().isTouch;

	/**
	* Page prototype
	*/
	API.addPagesSet('basicPage',{
		noSubmit:false, //Change to true if you don't want to show the submit button.
		v1style: 2,
		decline: true,
		declineText: isTouch ? 'Decline' : 'Decline to Answer', 
		autoFocus:true, 
		header: 'Demographics',
		numbered: false,
		progressBar: isTouch ? 'Page <%= pagesMeta.number %> out of 8' : 'Page <%= pagesMeta.number %> out of 8'
	});

	/**
	* Question prototypes
	*/
	API.addQuestionsSet('basicQ',{
		decline: true,
		required : true,
		errorMsg: {
			required: isTouch ? "Please select an answer, or click 'Decline'" : 
			"Please select an answer, or click 'Decline to Answer'"
		},
		autoSubmit:true,
		numericValues:true
	});

	API.addQuestionsSet('singleChoice',{
		inherit: 'basicQ',
		type: 'selectOne', 
		help: '<%= pagesMeta.number < 10 %>',
		helpText: 'Tip: For quick response, click to select your answer, and then click again to submit.'
	});

	API.addQuestionsSet('text',{
			inherit: 'basicQ',
			type: 'text',
			noSubmit:false
	});

	API.addQuestionsSet('singleChoicedrop',{
		inherit: 'basicQ',
		autoSubmit:false,
		type: 'dropdown'
	});

	API.addQuestionsSet('multiChoice',{
		inherit: 'basicQ',
		type: 'selectMulti'
	});

	API.addQuestionsSet('boolean',{
		inherit: 'basicQ',
        type: 'selectOne',
        buttons: true,
        answers : [
			{text:'Yes', value:1},
			{text:'No', value:0}
		]
	});

	/**
	* Actual questions
	*/

	 API.addQuestionsSet('license',{
		inherit: 'multiChoice',
		style:'multiButtons',
		name: 'license',
		stem: "What professional mental health license do you hold?",
		answers: [
			{text:'LMFT',value:1},
			{text:'LCSW',value:2},
			{text:'LPCC',value:3},
			{text:'Psychologist',value:4},
			{text:'Psychiatrist',value:5},
			{text:'Other',value:6}
		]
	});
	
	API.addQuestionsSet('clinicalYears',{
		inherit: 'singleChoice',
		style:'multiButtons',
		name: 'clinicalYears',
		stem: "How many years have you practiced clinically?",
		answers: [
			{text:'0-5',value:1},
			{text:'6-10',value:2},
			{text:'11-15',value:3},
			{text:'16-20',value:4},
			{text:'21+',value:5}
		]
	});
	
	API.addQuestionsSet('settings',{
		inherit: 'multiChoice',
		style:'multiButtons',
		name: 'settings',
		stem: "What clinical settings have you worked in?",
		answers: [
			{text:'Private practice',value:1},
			{text:'Residential',value:2},
			{text:'Group home',value:3},
			{text:'County agency',value:4},
			{text:'Hospital',value:5},
			{text:'Foster home',value:6},
			{text:'Other',value:7}
		]
	});
	
	API.addQuestionsSet('bias',{
		inherit: 'singleChoice',
		style:'multiButtons',
		name: 'bias',
		stem: "How much training have you had regarding biases?",
		answers: [
			{text:'0-2 Trainings',value:1},
			{text:'3-5 Trainings',value:2},
			{text:'6-8 Trainings',value:3},
			{text:'9-11 Trainings',value:4},
			{text:'12+ Trainings',value:5}	
		]
	});
	
	API.addQuestionsSet('cultural',{
		inherit: 'singleChoice',
		style:'multiButtons',
		name: 'cultural',
		stem: "Have you had cultural sensitivity or cultural diversity education?",
		answers: [
			{text:'yes',value:1},
			{text:'no',value:2}
		]
	});
	API.addQuestionsSet('birthYear',{
		inherit: 'singleChoicedrop',
		name: 'birthyear',
		stem: "What is your birth year?",
		answers: [
			{text:'2009',value:2009},
			{text:'2008',value:2008},
			{text:'2007',value:2007},
			{text:'2006',value:2006},
			{text:'2005',value:2005},
			{text:'2004',value:2004},
			{text:'2003',value:2003},
			{text:'2002',value:2002},
			{text:'2001',value:2001},
			{text:'2000',value:2000},
			{text:'1999',value:1999},
			{text:'1998',value:1998},
			{text:'1997',value:1997},
			{text:'1996',value:1996},
			{text:'1995',value:1995},
			{text:'1994',value:1994},
			{text:'1993',value:1993},
			{text:'1992',value:1992},
			{text:'1991',value:1991},
			{text:'1990',value:1990},
			{text:'1989',value:1989},
			{text:'1988',value:1988},
			{text:'1987',value:1987},
			{text:'1986',value:1986},
			{text:'1985',value:1985},
			{text:'1984',value:1984},
			{text:'1983',value:1983},
			{text:'1982',value:1982},
			{text:'1981',value:1981},
			{text:'1980',value:1980},
			{text:'1979',value:1979},
			{text:'1978',value:1978},
			{text:'1977',value:1977},
			{text:'1976',value:1976},
			{text:'1975',value:1975},
			{text:'1974',value:1974},
			{text:'1973',value:1973},
			{text:'1972',value:1972},
			{text:'1971',value:1971},
			{text:'1970',value:1970},
			{text:'1969',value:1969},
			{text:'1968',value:1968},
			{text:'1967',value:1967},
			{text:'1966',value:1966},
			{text:'1965',value:1965},
			{text:'1964',value:1964},
			{text:'1963',value:1963},
			{text:'1962',value:1962},
			{text:'1961',value:1961},
			{text:'1960',value:1960},
			{text:'1959',value:1959},
			{text:'1958',value:1958},
			{text:'1957',value:1957},
			{text:'1956',value:1956},
			{text:'1955',value:1955},
			{text:'1954',value:1954},
			{text:'1953',value:1953},
			{text:'1952',value:1952},
			{text:'1951',value:1951},
			{text:'1950',value:1950},
			{text:'1949',value:1949},
			{text:'1948',value:1948},
			{text:'1947',value:1947},
			{text:'1946',value:1946},
			{text:'1945',value:1945},
			{text:'1944',value:1944},
			{text:'1943',value:1943},
			{text:'1942',value:1942},
			{text:'1941',value:1941},
			{text:'1940',value:1940},
			{text:'1939',value:1939},
			{text:'1938',value:1938},
			{text:'1937',value:1937},
			{text:'1936',value:1936},
			{text:'1935',value:1935},
			{text:'1934',value:1934},
			{text:'1933',value:1933},
			{text:'1932',value:1932},
			{text:'1931',value:1931},
			{text:'1930',value:1930},
			{text:'1929',value:1929},
			{text:'1928',value:1928},
			{text:'1927',value:1927},
			{text:'1926',value:1926},
			{text:'1925',value:1925},
			{text:'1924',value:1924},
			{text:'1923',value:1923},
			{text:'1922',value:1922},
			{text:'1921',value:1921},
			{text:'1920',value:1920},
			{text:'1919',value:1919},
			{text:'1918',value:1918},
			{text:'1917',value:1917},
			{text:'1916',value:1916},
			{text:'1915',value:1915},
			{text:'1914',value:1914},
			{text:'1913',value:1913},
			{text:'1912',value:1912},
			{text:'1911',value:1911},
			{text:'1910',value:1910}
		]
	});

	API.addQuestionsSet('raceomb',{
		inherit: 'multiChoice',
		name: 'raceomb',
		stem: "What is your race?",
		autoSubmit: false,
		answers: [
			{text:'American Indian/Alaska Native',value:1},
			{text:'Asian',value:2},
			{text:'Hispanic or Latin',value:3},
			{text:'Native Hawaiian or other Pacific Islander',value:4},
			{text:'Black or African American',value:5},
			{text:'White',value:6},
			{text:'Other or Unknown',value:7},
			{text:'Prefer not to say',value:8}
		]

    	});
	
	API.addQuestionsSet('measures',{
		inherit: 'multiChoice',
		name: 'measures',
		stem: "Have you utilized any of the following clinical measures/tools? (check all that apply)",
		answers: [
			{text:'Clinician-Rated Dimensions of Psychosis Symptom Severity scale',value:1},
			{text:'Brief Psychiatric Rating Scale',value:2}, 
			{text:'Quality of Life Scale',value:3}, 
			{text:'Schedule of Affective Disorders and Schizophrenia',value:4}, 
			{text:'The Auditory Hallucinations Schedule',value:5}, 
			{text:'DSM III-R Checklist',value:6},
			{text:'DSM III-R Diagnostic Interview',value:7},
			{text:'Structured Clinical Interview for DSM-IV',value:8},
			{text:'Positive and Negative Syndrome Scale (PANSS)',value:9},
			{text:'Repeatable Battery for the Assessment of Neuropsychological Status',value:10},
			{text:'Specific Levels of Functioning Scale (SLOF)',value:11},
			{text:'WHO-CIDI 3.0 psychosis screen',value:12},
			{text:'WHO Disability Assessment Schedule',value:13},
			{text:'The self-report Service User and Resource Form',value:14},
			{text:'Diagnostic Interview for Psychosis and Affective Disorders (DI-PAD)',value:15},
			{text:'Operational Criteria Checklist for Psychotic Illness',value:16}	
		]
	});


	if (isTouch)
	{
		API.addSequence([
			{
				inherit: 'basicPage',
				questions: [{inherit: 'birthYear'}]
			},
			{
    				inherit: 'basicPage',
    				questions: [{inherit: 'raceomb'}]
			},
			{
				inherit: 'basicPage',
				questions: [{inherit: 'license'}]
			},
			{
				inherit: 'basicPage',
				questions: [{inherit: 'clinicalYears'}]
			},
			{
				inherit: 'basicPage',
				questions: [{inherit: 'settings'}]
			},
			{
				inherit: 'basicPage',
				questions: [{inherit: 'bias'}]
			},
			{
				inherit: 'basicPage',
				questions: [{inherit: 'cultural'}]
			},
			{
				inherit: 'basicPage',
				questions: [{inherit: 'measures'}]
			}	
		]);
	}
	else
	{
		API.addSequence([
			{
				inherit: 'basicPage',
				questions: [{inherit: 'birthYear'}]
			},
			{
    				inherit: 'basicPage',
   				questions: [{inherit: 'raceomb'}]
			},
			{
				inherit: 'basicPage',
				questions: [{inherit: 'license'}]
			},
			{
				inherit: 'basicPage',
				questions: [{inherit: 'clinicalYears'}]
			},
			{
				inherit: 'basicPage',
				questions: [{inherit: 'settings'}]
			},
			{
				inherit: 'basicPage',
				questions: [{inherit: 'bias'}]
			},
			{
				inherit: 'basicPage',
				questions: [{inherit: 'cultural'}]
			},
			{
				inherit: 'basicPage',
				questions: [{inherit: 'measures'}]
			}		
		]);
	}

	return API.script;
});
