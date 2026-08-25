import { useState } from "react"


interface IItems
{
    id:number,
    name:string;
}

const Crud = () => {
    const [items,setItems]=useState<IItems[]>([]);
    const [name,SetName]=useState<string>('');
    const [id,Setid]=useState<number | null>(null);
    const addItem=()=>
        {
            if(!name.trim()) return;
            setItems([...items,{id:Date.now(),name}]);
            SetName('');
        };
    const updateItem=()=>
        {
            if(!id) return Error; 
            setItems(items.map(item=>item.id===id?{...item , name}:item));
            Setid(null);
            SetName('');
        };   
    const deleteItm=(id:number)=>
        {
            setItems(items.filter(items=>items.id!==id));

        };    

    const startEdit=(items:IItems)=>
        {   
            Setid(items.id);
            SetName(items.name);
        }    
    return (
    <div className="app">
      <div className="card">
        <h1>My Items</h1>
        <div className="input-row">
          <input
            type="text"
            placeholder="Enter item name..."
            value={name}
            onChange={e => SetName(e.target.value)}/>
          {id ? (
            <button className="btn-update" onClick={updateItem}>Update</button>
          ) : (
            <button className="btn-add" onClick={addItem}>Add</button>
          )}
        </div>
        {items.length === 0 ? (
          <p className="empty">how you don't have any task ??
                               List your Tasks Now!!     
           </p>
        ) : (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <span>{item.name}</span>
                <div className="actions">
                  <button className="btn-edit" onClick={() => startEdit(item)}>Edit</button>
                  <button className="btn-delete" onClick={() => deleteItm(item.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Crud