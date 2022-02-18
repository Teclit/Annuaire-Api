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

    const ListOrganism = [
        {key:'accompagnement_personnes_agees', value:'accompagnement_personnes_agees', text: 'accompagnement_personnes_agees'},
        {key:'adil', value:'adil', text: 'adil'},
        {key:'afpa', value:'afpa', text: 'afpa'},
        {key:'anah', value:'anah', text: 'anah'},
        {key:'apec', value:'apec', text: 'apec'},
        {key:'apecita', value:'apecita', text: 'apecita'},
        {key:'ars', value:'ars', text: 'ars'},
        {key:'ars_antenne', value:'ars_antenne', text: 'ars_antenne'},
        {key:'banque_de_france', value:'banque_de_france', text: 'banque_de_france'},
        {key:'bav', value:'bav', text: 'bav'},
        {key:'bsn', value:'bsn', text: 'bsn'},
        {key:'caa', value:'caa', text: 'caa'},
        {key:'caf', value:'caf', text: 'caf'},
        {key:'carsat', value:'carsat', text: 'carsat'},
        {key:'ccas', value:'ccas', text: 'ccas'},
        {key:'cci', value:'cci', text: 'cci'},
        {key:'cdas', value:'cdas', text: 'cdas'},
        {key:'cddp', value:'cddp', text: 'cddp'},
        {key:'cdg', value:'cdg', text: 'cdg'},
        {key:'centre_detention', value:'centre_detention', text: 'centre_detention'},
        {key:'centre_impots_fonciers', value:'centre_impots_fonciers', text: 'centre_impots_fonciers'},
        {key:'centre_penitentiaire', value:'centre_penitentiaire', text: 'centre_penitentiaire'},
        {key:'centre_social', value:'centre_social', text: 'centre_social'},
        {key:'cesr', value:'cesr', text: 'cesr'},
        {key:'cg', value:'cg', text: 'cg'},
        {key:'chambre_agriculture', value:'chambre_agriculture', text: 'chambre_agriculture'},
        {key:'chambre_metier', value:'chambre_metier', text: 'chambre_metier'},
        {key:'cicas', value:'cicas', text: 'cicas'},
        {key:'cidf', value:'cidf', text: 'cidf'},
        {key:'cij', value:'cij', text: 'cij'},
        {key:'cio', value:'cio', text: 'cio'},
        {key:'civi', value:'civi', text: 'civi'},
        {key:'clic', value:'clic', text: 'clic'},
        {key:'cnfpt', value:'cnfpt', text: 'cnfpt'},
        {key:'cnra', value:'cnra', text: 'cnra'},
        {key:'commissariat_police', value:'commissariat_police', text: 'commissariat_police'},
        {key:'commission_conciliation', value:'commission_conciliation', text: 'commission_conciliation'},
        {key:'conciliateur_fiscal', value:'conciliateur_fiscal', text: 'conciliateur_fiscal'},
        {key:'conseil_culture', value:'conseil_culture', text: 'conseil_culture'},
        {key:'cour_appel', value:'cour_appel', text: 'cour_appel'},
        {key:'cpam', value:'cpam', text: 'cpam'},
        {key:'cr', value:'cr', text: 'cr'},
        {key:'crc', value:'crc', text: 'crc'},
        {key:'crdp', value:'crdp', text: 'crdp'},
        {key:'creps', value:'creps', text: 'creps'},
        {key:'crfpn', value:'crfpn', text: 'crfpn'},
        {key:'crib', value:'crib', text: 'crib'},
        {key:'crous', value:'crous', text: 'crous'},
        {key:'csl', value:'csl', text: 'csl'},
        {key:'dac', value:'dac', text: 'dac'},
        {key:'dd_femmes', value:'dd_femmes', text: 'dd_femmes'},
        {key:'dd_fip', value:'dd_fip', text: 'dd_fip'},
        {key:'ddcs', value:'ddcs', text: 'ddcs'},
        {key:'ddcspp', value:'ddcspp', text: 'ddcspp'},
        {key:'ddpjj', value:'ddpjj', text: 'ddpjj'},
        {key:'ddpp', value:'ddpp', text: 'ddpp'},
        {key:'ddsp', value:'ddsp', text: 'ddsp'},
        {key:'ddt', value:'ddt', text: 'ddt'},
        {key:'defenseur_droits', value:'defenseur_droits', text: 'defenseur_droits'},
        {key:'did_routes', value:'did_routes', text: 'did_routes'},
        {key:'dir_mer', value:'dir_mer', text: 'dir_mer'},
        {key:'dir_meteo', value:'dir_meteo', text: 'dir_meteo'},
        {key:'dir_pj', value:'dir_pj', text: 'dir_pj'},
        {key:'direccte', value:'direccte', text: 'direccte'},
        {key:'direccte_ut', value:'direccte_ut', text: 'direccte_ut'},
        {key:'dml', value:'dml', text: 'dml'},
        {key:'dr_femmes', value:'dr_femmes', text: 'dr_femmes'},
        {key:'dr_fip', value:'dr_fip', text: 'dr_fip'},
        {key:'dr_insee', value:'dr_insee', text: 'dr_insee'},
        {key:'drac', value:'drac', text: 'drac'},
        {key:'draf', value:'draf', text: 'draf'},
        {key:'drddi', value:'drddi', text: 'drddi'},
        {key:'dreal', value:'dreal', text: 'dreal'},
        {key:'dreal_ut', value:'dreal_ut', text: 'dreal_ut'},
        {key:'driea', value:'driea', text: 'driea'},
        {key:'driea_ut', value:'driea_ut', text: 'driea_ut'},
        {key:'driee', value:'driee', text: 'driee'},
        {key:'driee_ut', value:'driee_ut', text: 'driee_ut'},
        {key:'drihl', value:'drihl', text: 'drihl'},
        {key:'drihl_ut', value:'drihl_ut', text: 'drihl_ut'},
        {key:'drjscs', value:'drjscs', text: 'drjscs'},
        {key:'dronisep', value:'dronisep', text: 'dronisep'},
        {key:'drpjj', value:'drpjj', text: 'drpjj'},
        {key:'drrt', value:'drrt', text: 'drrt'},
        {key:'drsp', value:'drsp', text: 'drsp'},
        {key:'dz_paf', value:'dz_paf', text: 'dz_paf'},
        {key:'edas', value:'edas', text: 'edas'},
        {key:'epci', value:'epci', text: 'epci'},
        {key:'esm', value:'esm', text: 'esm'},
        {key:'fdapp', value:'fdapp', text: 'fdapp'},
        {key:'fdc', value:'fdc', text: 'fdc'},
        {key:'fongecif', value:'fongecif', text: 'fongecif'},
        {key:'gendarmerie', value:'gendarmerie', text: 'gendarmerie'},
        {key:'greta', value:'greta', text: 'greta'},
        {key:'hypotheque', value:'hypotheque', text: 'hypotheque'},
        {key:'inspection_academique', value:'inspection_academique', text: 'inspection_academique'},
        {key:'maia', value:'maia', text: 'maia'},
        {key:'mairie', value:'mairie', text: 'mairie'},
        {key:'mairie_com', value:'mairie_com', text: 'mairie_com'},
        {key:'mairie_mobile', value:'mairie_mobile', text: 'mairie_mobile'},
        {key:'maison_arret', value:'maison_arret', text: 'maison_arret'},
        {key:'maison_centrale', value:'maison_centrale', text: 'maison_centrale'},
        {key:'maison_handicapees', value:'maison_handicapees', text: 'maison_handicapees'},
        {key:'mds', value:'mds', text: 'mds'},
        {key:'mission_locale', value:'mission_locale', text: 'mission_locale'},
        {key:'mjd', value:'mjd', text: 'mjd'},
        {key:'msa', value:'msa', text: 'msa'},
        {key:'ofii', value:'ofii', text: 'ofii'},
        {key:'onac', value:'onac', text: 'onac'},
        {key:'onf', value:'onf', text: 'onf'},
        {key:'paris_mairie', value:'paris_mairie', text: 'paris_mairie'},
        {key:'paris_mairie_arrondissement', value:'paris_mairie_arrondissement', text: 'paris_mairie_arrondissement'},
        {key:'paris_ppp', value:'paris_ppp', text: 'paris_ppp'},
        {key:'paris_ppp_antenne', value:'paris_ppp_antenne', text: 'paris_ppp_antenne'},
        {key:'paris_ppp_certificat_immatriculation', value:'paris_ppp_certificat_immatriculation', text: 'paris_ppp_certificat_immatriculation'},
        {key:'paris_ppp_gesvres', value:'paris_ppp_gesvres', text: 'paris_ppp_gesvres'},
        {key:'paris_ppp_permis_conduire', value:'paris_ppp_permis_conduire', text: 'paris_ppp_permis_conduire'},
        {key:'permanence_juridique', value:'permanence_juridique', text: 'permanence_juridique'},
        {key:'permanence_sociale', value:'permanence_sociale', text: 'permanence_sociale'},
        {key:'pif', value:'pif', text: 'pif'},
        {key:'pmi', value:'pmi', text: 'pmi'},
        {key:'pole_emploi', value:'pole_emploi', text: 'pole_emploi'},
        {key:'pp_marseille', value:'pp_marseille', text: 'pp_marseille'},
        {key:'prefecture', value:'prefecture', text: 'prefecture'},
        {key:'prefecture_greffe_associations', value:'prefecture_greffe_associations', text: 'prefecture_greffe_associations'},
        {key:'prefecture_region', value:'prefecture_region', text: 'prefecture_region'},
        {key:'prudhommes', value:'prudhommes', text: 'prudhommes'},
        {key:'rectorat', value:'rectorat', text: 'rectorat'},
        {key:'sdac', value:'sdac', text: 'sdac'},
        {key:'sdsei', value:'sdsei', text: 'sdsei'},
        {key:'service_navigation', value:'service_navigation', text: 'service_navigation'},
        {key:'sgami', value:'sgami', text: 'sgami'},
        {key:'sie', value:'sie', text: 'sie'},
        {key:'sip', value:'sip', text: 'sip'},
        {key:'sous_pref', value:'sous_pref', text: 'sous_pref'},
        {key:'spip', value:'spip', text: 'spip'},
        {key:'suio', value:'suio', text: 'suio'},
        {key:'ta', value:'ta', text: 'ta'},
        {key:'te', value:'te', text: 'te'},
        {key:'tgi', value:'tgi', text: 'tgi'},
        {key:'ti', value:'ti', text: 'ti'},
        {key:'tresorerie', value:'tresorerie', text: 'tresorerie'},
        {key:'tribunal_commerce', value:'tribunal_commerce', text: 'tribunal_commerce'},
        {key:'urssaf', value:'urssaf', text: 'urssaf'}
    ];

    const urlDeparments = "https://geo.api.gouv.fr/departements?fields=nom,code,codeRegion"
    const [urlOrganismes, setUrlOrganismes] = useState()
    
    
    //Add Organisme url
    const searchUrlOrgs  = (dptChoisi, orgChoisi)=>{
        const nvUrl ="https://etablissements-publics.api.gouv.fr/v3/departements/"+dptChoisi+'/'+orgChoisi
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
                    ListesOrganismes  = {ListOrganism}
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
