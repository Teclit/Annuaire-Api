/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import axios from 'axios'
import Header from './components/Header'
import Form from './components/Form'
import Lists from './components/Lists'
// import { Item } from "semantic-ui-react"

const App = () => {

    const [organismes, setOrganismes] = useState([])
    const [departments, setDepartments] = useState([])

    const urlDeparments = "https://geo.api.gouv.fr/departements?fields=nom,code,codeRegion"
    const [urlOrganismes, setUrlOrganismes] = useState()
    
    
    //Add Organisme url
    const searchUrlOrgs  = (dptChoisi, orgChoisi)=>{
        const nvUrl ="https://etablissements-publics.api.gouv.fr/v3/departements/"+dptChoisi+'/'+orgChoisi
        console.log(nvUrl)
        return setUrlOrganismes(nvUrl)
    }
    
     //reset Organisme url
    const resetSearch  = ()=>{
        window.location.reload(false);
    }

    //Fetch Organisme
    useEffect(() => {
        axios
        .get(urlOrganismes)
        .then(res =>{
            setOrganismes((res.data).features)
        })
        .catch(err=>{
            //console.log(err)
            //console.log('PAS DE URL')
        })
    },[searchUrlOrgs]);



    //Fetch Department
    useEffect(() => {
        axios
        .get(urlDeparments)
        .then(res =>{
            setDepartments(res.data)
        })
        .catch(err=>{console.log(err)})
    },[]);


    //APP RETURN
    return (
        <div className='container'>
            <Header/>
            <section className='sectionBar'>
                <Form 
                    ListesDeapartment = {departments}
                    ListesOrganismes  = {organismes}
                    onSearch          = {searchUrlOrgs}
                    onEmpty           = {resetSearch}
                />
            </section>
            <section className='sectionList'>
                <ul >
                    <> 
                
                    {      
                        organismes.length > 0 ? (
                        organismes.map((orgs,index)=>(
                            <Lists 
                            organisme = {(orgs.properties).nom }
                            telephone = {(orgs.properties).telephone}
                            link      = {(orgs.properties).url}
                            key       = {index}
                            />
                        ))
                        ) : (
                            <div className="containerVide">
                                <h3>Pas de Données</h3>
                                <p>Faire un recherche</p>
                            </div>
                        )
                    }
                    </>
                </ul>
            </section>
        </div>
    );
}

export default App;
