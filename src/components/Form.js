import { useState } from "react"


const Form =({ListesDeapartment, ListesOrganismes, onSearch, onEmpty})=> {
    const [dptChoisi, setDptChoisi] = useState('')
    const [orgChoisi, setOrgChoisi] = useState('')
    

    const onSubmit =(e)=>{
        e.preventDefault()
        if(!dptChoisi || !orgChoisi  ) {
            alert('Il faut choisir  Department et Organism')
            return
        }

        onSearch(dptChoisi, orgChoisi)
    }

    const onReset =(e)=>{
        e.preventDefault()
        onEmpty()
    }


    return (
        <form className='add-form'  onSubmit={onSubmit}  onReset={onReset}>

                <input 
                    list="deparment" name="deparment"  
                    placeholder="Select Department" className='selectbtn' 
                    onChange={(e) => setDptChoisi(e.target.value)}
                />
                <datalist id="deparment">
                    {ListesDeapartment.map((department,index)=>(
                        
                        <option key={index} value={department.code}>{department.nom}</option>
                    ))}
                </datalist>

            
                <input 
                    list="organisme" name="organisme" 
                    placeholder="Select organisme" className='selectbtn' 
                    onChange={(e) => setOrgChoisi(e.target.value)} 
                />
                <datalist id="organisme">
                    <option value="pole_emploi">Pôle emploi</option>
                    <option value="ccas">Centre communal d'action sociale</option>
                    <option value="caf">Caisse d’allocations familiales (CAF)</option>
                    <option value="mairie">Mairie</option>
                    <option value="prefecture">Préfecture</option>
                    <option value="ta">Tribunal administratif</option>

                </datalist>

            <input type='submit' value='Lancer la recherche' className='btn' />
            <input type='reset' value='Vider la recherche' className='btn'  />
        </form>
    )
}

export default Form