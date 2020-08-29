import React from 'react';
import { Cards, Charts, Picker } from "./Components";
import styles from './App.module.css'

function App() {


    return (
        <div className={styles.container}>
       <Cards/>
       <Picker/>
       <Charts/>
        </div>
    );
}

export default App;
