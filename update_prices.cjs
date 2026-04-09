const fs = require('fs');
const path = require('path');

const UI_FILES = [
    'src/components/ui/CourseCard.jsx',
    'src/components/dashboard/student/StudentBrowse.jsx',
    'src/components/dashboard/instructor/InstructorOverview.jsx',
    'src/components/dashboard/instructor/InstructorFinance.jsx',
    'src/components/dashboard/instructor/InstructorCourses.jsx',
    'src/components/dashboard/admin/AdminOverview.jsx',
    'src/pages/CourseDetails.jsx',
    'src/components/CourseDetails.jsx'
];

for (const file of UI_FILES) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        content = content.replace(/\$\$\{/g, '₹${');
        content = content.replace(/\>\$/g, '>₹');
        content = content.replace(/\"\$/g, '"₹');
        content = content.replace(/\+\$/g, '+₹');
        content = content.replace(/\(\$\)/g, '(₹)');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated currency symbol in ${file}`);
    }
}

const DATA_FILES = [
    'src/data/courses.js',
    'src/data/coursesData.js'
];

for (const file of DATA_FILES) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        content = content.replace(/(discountPrice|price|revenue):\s*(\d+)/g, (match, key, valueStr) => {
            const val = parseInt(valueStr, 10);
            if (val > 0 && val < 5000) { 
                const inrVal = val * 83;
                let rounded = Math.round(inrVal / 100) * 100;
                if (rounded === 0) rounded = inrVal;
                return `${key}: ${rounded}`;
            }
            return match;
        });

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated prices in ${file}`);
    }
}
