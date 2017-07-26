// objekat 1.
var testObjekat = {
	naziv: "Startit kurs parvljenja sajtova",
	trajanjeNedelja: 33,
	predavac: {
		ime: "Petar",
		prezime: "Popovic"
	},
	ocenePolaznika: [3, 2, 7, 4, 8 ,1, 9, 2, 10, 10, 3, 6, 3, 1, 7, 3, 5, 4, 10, 9, 1, 9],
	organizacija: "Startit",
	kursJosTraje: true
};

// vezba 1.
// funkcija koja ispisuje ocene polaznika sa sufiksom '/10'

var objekat = testObjekat.ocenePolaznika;

function ocene(objekat) {

	var noviNiz = [];

	for (i = 0; i < objekat.length; i++) {
		noviNiz.push(objekat[i] + "/10");
	}

	return noviNiz;
}

console.log(ocene(objekat));

// vezba 2.
// funkcija koja daje statistiku koliko puta se ponavlja svaka ocena; objekat { ocenaX: br.puta}

var objekat = testObjekat.ocenePolaznika;

function countInArray(array, what) {
		
	var count = 0;
	
	for (var i = 0; i < array.length; i++) {
		 
			if (array[i] === what) {
					count++;
			}
	}
	return count;
}

function rangiranje(objekat) {

	var rate_counts = [];

	var objekat2 = objekat;

	var noviObjekat = objekat.filter(function(elem,pos){
		return objekat2.indexOf(elem) == pos;
	});

	function sortNumber(a,b) {
		return a-b;
	}

	noviObjekat.sort(sortNumber);


	for ( i =0 ; i < noviObjekat.length; i++){

		if (noviObjekat[i] == 1) {

			rate_counts.push({

				rate_1: countInArray(objekat,noviObjekat[i])
			})
		}
		else if (noviObjekat[i] == 2) {

			rate_counts.push({
				rate_2: countInArray(objekat, noviObjekat[i])
			})
		}
			else if (noviObjekat[i] == 3) {

			rate_counts.push({
				rate_3: countInArray(objekat, noviObjekat[i])
			})
		}
			else if (noviObjekat[i] == 4) {

			rate_counts.push({
				rate_4: countInArray(objekat, noviObjekat[i])
			})
		}
			else if (noviObjekat[i] == 5) {

			rate_counts.push({
				rate_5: countInArray(objekat, noviObjekat[i])
			})
		}
			else if (noviObjekat[i] == 6) {

			rate_counts.push({
				rate_6: countInArray(objekat, noviObjekat[i])
			})
		}
			else if (noviObjekat[i] == 7) {

			rate_counts.push({
				rate_7: countInArray(objekat, noviObjekat[i])
			})
		}
			else if (noviObjekat[i] == 8) {

			rate_counts.push({
				rate_8: countInArray(objekat, noviObjekat[i])
			})
		}
			else if (noviObjekat[i] == 9) {

			rate_counts.push({
				rate_9: countInArray(objekat, noviObjekat[i])
			})
		}
		else {

			rate_counts.push({
				rate_10: countInArray(objekat, noviObjekat[i])
			})
		}		
	}

return rate_counts;
}

console.log(rangiranje(objekat));

//vezba 3.
// funkcija koja racuna prosecnu ocenu
var objekat = testObjekat.ocenePolaznika;

function prosek(objekat) {

	var x = 0;
	var n = objekat.length;

	for( i = 0; i < n; i++) {

		x += objekat[i];

	}

	return x/n;
}

console.log(prosek(objekat));

// objekat2	
var people = [
  {
    name: 'Joe Schmoe',
    yearsExperience: 1,
    department: 'IT'
  },
  {
    name: 'Sally Sallerson',
    yearsExperience: 15,
    department: 'Engineering'
  },
  {
    name: 'Bill Billson',
    yearsExperience: 5,
    department: 'Engineering'
  },
  {
    name: 'Jane Janet',
    yearsExperience: 11,
    department: 'Management'
  },
  {
    name: 'Bob Hope',
    yearsExperience: 9,
    department: 'IT'
  }
];

//vezba 4.
// koliko godina iskustva imaju svi ljudi zajedno

function ukupno() {

	var newArr = [];
	var x = 0;

	for( i =0; i < people.length; i++) {

		newArr.push(people[i].yearsExperience);

	}

	for ( j = 0; j < newArr.length; j++) {

		x+=newArr[j];
	}

	return x;
}

console.log(ukupno());

// vezba 5.
// zbir godina iskustva po sektorima

function sektori(){

    var newArr = [];
    var it = [];
    var en = [];
    var ma = [];

    for(i = 0; i < people.length; i++){

      if(people[i].department === "IT") {

          it.push(people[i].yearsExperience);
      }
      else if (people[i].department === "Engineering") {

          en.push(people[i].yearsExperience);
      }
      else {
          ma.push(people[i].yearsExperience);
      }

    }

    var x = 0;
    var y = 0; 
    var z = 0;

    for (j=0; j < it.length; j++){

        x+=it[j];
    }

    for (e =0; e <en.length; e++){

        y+=en[e];
    }

    for (k = 0; k < ma.length; k++){

        z+=ma[k];
    }

    var newObj = [];

    newObj.push({

      IT: x,
      Engineering: y,
      Management: z

    })

  return newObj;
}

console.log(sektori());

