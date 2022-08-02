
const productosCollage=[        
                        {
                        id: "c1",   
                        nombre: "Microbloqueo I",
                        foto: "/src/assets/photos/microbloqueo_1.jpg",
                        precio: "15.000",
                        categoria: "collageTipo_1" 
                        },
                        {
                        id: "c2",  
                        nombre: "Microbloqueo II",
                        foto: "/src/assets/photos/microbloqueo_2.jpg",
                        precio: "15.000",
                        categoria: "collageTipo_1"
                        },
                        {
                        id: "c3",  
                        nombre: "Microbloqueo III",
                        foto: "/src/assets/photos/microbloqueo_3.jpg",
                        precio: "15.000",
                        categoria: "collageTipo_1"
                        },
                        {
                        id: "c4",  
                        nombre: "Microbloqueo IV",
                        foto: "/src/assets/photos/microbloqueo_4.jpg",
                        precio: "15.000",
                        categoria: "collageTipo_1"
                        },
                        {
                        id: "c5",  
                        nombre: "Microbloqueo V",
                        foto: "/src/assets/photos/microbloqueo_5.jpg",
                        precio: "15.000",
                        categoria: "collageTipo_1"
                        },
                        {
                        id: "c6",  
                        nombre: "Microbloqueo VI",
                        foto: "/src/assets/photos/microbloqueo_6.jpg",
                        precio: "15.000",
                        categoria: "collageTipo_1"
                        },
                        {
                        id: "c7",  
                        nombre: "Microbloqueo VII",
                        foto: "/src/assets/photos/microbloqueo_7.jpg",
                        precio: "15.000",
                        categoria: "collageTipo_1"
                        },
                        {
                        id: "c8",  
                        nombre: "Microbloqueo VIII",
                        foto: "/src/assets/photos/microbloqueo_8.jpg",
                        precio: "15.000",
                        categoria: "collageTipo_1"
                        },
                        {
                        id: "c9",  
                        nombre: "Microbloqueo IX",
                        foto: "/src/assets/photos/microbloqueo_9.jpg",
                        precio: "15.000",
                        categoria: "collageTipo_2"
                        },
                        {
                        id: "c10",  
                        nombre: "Microbloqueo X",
                        foto: "/src/assets/photos/microbloqueo_10.jpg",
                        precio: "15.000",
                        categoria: "collageTipo_2"
                        },
                        {
                        id: "c11",  
                        nombre: "Microbloqueo XI",
                        foto: "/src/assets/photos/microbloqueo_11.jpg",
                        precio: "15.000",
                        categoria: "collageTipo_2"
                        },
                        {
                        id: "c12",  
                        nombre: "Microbloqueo XII",
                        foto: "/src/assets/photos/microbloqueo_12.jpg",
                        precio: "15.000",
                        categoria: "collageTipo_2"
                        },
                        {
                        id: "c13",  
                        nombre: "Microbloqueo XIII",
                        foto: "/src/assets/photos/microbloqueo_13.jpg",
                        precio: "15.000",
                        categoria: "collageTipo_2"
                        },
                        {
                        id: "c14",  
                        nombre: "Microbloqueo XIV",
                        foto: "/src/assets/photos/microbloqueo_14.jpg",
                        precio: "15.000",
                        categoria: "collageTipo_2"
                        },
                        {
                        id: "c15",  
                        nombre: "Microbloqueo XV",
                        foto: "/src/assets/photos/microbloqueo_15.jpg",
                        precio: "15.000",
                        categoria: "collageTipo_2"
                        },
                        {
                        id: "c16",  
                        nombre: "Microbloqueo XVI",
                        foto: "/src/assets/photos/microbloqueo_16.jpg",
                        precio: "15.000",
                        categoria: "collageTipo_2"
                        }
]

export const getProductosCollage = (id)=>{           //función que nos retorna un objeto o el array completo 
    return new Promise((resolve)=>{       
        setTimeout(()=>{
            if(id){                                                //la condición pregunta si se ingresó o no un id como parámetro
                resolve(productosCollage.find(prod=>prod.id == id))     //retornamos solo el objeto que coincida con el id
            } else{
                resolve(productosCollage)                               //si no se le pasa id, retornamos el array completo de productos
            } 
        },500)
    })
}
