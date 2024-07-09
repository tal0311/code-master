import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Editor, { useMonaco } from '@monaco-editor/react';
import { itemService } from '../services/item.service.local';
import AppLoader from '../cmps/AppLoader';
import App from '../App';

function CodeDetails({ codeQuest }) {
    const [quest, setQuest] = useState({ ...codeQuest });
    const [theme, setTheme] = useState('vs-dark');

    const monaco = useMonaco();
   

    function handleEditorChange(value) {
        const newCode = { ...quest, code: value };
        setQuest(newCode);
    }

    function handleThemeChange(event) {
        setTheme(event.target.value);
    }

    const editorOptions ={
        fontSize: '18',
        lineNumbers: 'on',
        lineNumbersMinChars: 3,
        scrollBeyondLastLine: false,
        automaticLayout: true,
        tabSize: 4,
        wordwrap:'on',
        
        cursorStyle: 'block',
        minimap: {
            enabled: true
        }
    
    }

    function runCode() {  
        console.log(quest.code);
    }

    function updateOptions(idx, key, value) {
        console.log(key, value);
        // itemService.save(quest);
    }

    function addToFavorites() {
        console.log('add to favorites');
    }
    const controllers = [
        {
            title: 'Run',
            key: 'run',
            action: runCode,
            isActive: false
        },
        {
            title: 'Font +',
            key: 'fontSize',
            value: 2,
            action:updateOptions,
            isActive: false
        },
        {
            title: 'Font -',
            key: 'fontSize',
            value: -2,
            action:updateOptions,
            isActive: false
        },
        {
            title: 'Theme',
            key: 'theme',
            value: 'vs-light',
            action: updateOptions,
            isActive: false
        },
        {
            title: 'Save',
            key: 'save',
            action: addToFavorites,
            isActive: false
        }
    ]



    return (
        <>
            <div className='editor-container'>
                <h1>{quest.title}</h1>
                
                    <Editor 
                        loading={<AppLoader />}
                        className='editor'
                        theme="vs-dark"
                        height="50vh"
                        defaultLanguage="javascript"
                        value={quest.code}
                        onChange={handleEditorChange}
                        options={editorOptions}
                    />

                <div className='editor-controls grid grid-dir-col'>
                    {controllers.map((controller, idx) => {
                        return (
                            <button key={idx} onClick={()=>controller.action(idx ,controller.key, controller.value)}>{controller.title}</button>
                        )
                    })
                    
                    }
                    
                </div>
                
            </div>
        </>
    );
}

export default CodeDetails;
