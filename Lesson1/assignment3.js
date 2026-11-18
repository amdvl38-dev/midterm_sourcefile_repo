let grades = [85, 72, 91, 64, 78];
let gl = grades.length;
let remarks;
let porf;
let passed = 0;
let failed = 0;
let sum = 0;
let rawAverage = 0;
let finalAverage = 0;
let highest = 0;
let lowest = 100;

    console.log('Students: ');
    for(i = 0; i < gl; i++){
        console.log(grades[i]);
    }

    console.log('');
    for(i = 0; i < gl; i++){  
        

        sum += grades[i];
        rawAverage += grades[i]/gl;
        finalAverage = Math.round(rawAverage);
        

        if(grades[i] > 90){
            remarks = 'Excellent';
        } else if(grades[i] > 80){
            remarks = 'Very Good';
        } else if(grades[i] > 75){
            remarks = 'Good';
        } else if(grades[i] < 75){
            remarks = 'Failed';
        } else if(grades[i] > 100){
            remarks = '';
        }

        if(grades[i] > 75){
            porf = ' - Passed';
            passed++;
        }else if(grades[i] < 75){
            porf = '';
            failed++;
        }
        
        if(grades[i] > highest){
            highest = grades[i];
        } else if(grades[i] < lowest){
            lowest = grades[i];
        }

      
      console.log('Student' + ' ' + (i + 1) + ': ' + grades[i] + ' ' + remarks + porf ); 

}

    console.log('\nTotal Score: ' + sum);
    console.log('Average: ' + finalAverage);
    console.log('Highest: ' + highest);
    console.log('Lowest: ' + lowest);
    console.log('Passed: ' + passed);
    console.log('Failed: ' + failed);
