
const productosCollage=[        
                        {
                        id: "c1",   
                        nombre: "Microbloqueo I",
                        foto: "src/assets/photos/microbloqueo_1.jpg",
                        precio: 15000
                        },
                        {
                        id: "c2",  
                        nombre: "Microbloqueo II",
                        foto: "src/assets/photos/microbloqueo_2.jpg",
                        precio: 15000
                        },
                        {
                        id: "c3",  
                        nombre: "Microbloqueo III",
                        foto: "src/assets/photos/microbloqueo_3.jpg",
                        precio: 15000
                        },
                        {
                        id: "c4",  
                        nombre: "Microbloqueo IV",
                        foto: "src/assets/photos/microbloqueo_4.jpg",
                        precio: 15000
                        },
                        {
                        id: "c5",  
                        nombre: "Microbloqueo V",
                        foto: "src/assets/photos/microbloqueo_5.jpg",
                        precio: 15000
                        },
                        {
                        id: "c6",  
                        nombre: "Microbloqueo VI",
                        foto: "src/assets/photos/microbloqueo_6.jpg",
                        precio: 15000
                        },
                        {
                        id: "c7",  
                        nombre: "Microbloqueo VII",
                        foto: "src/assets/photos/microbloqueo_7.jpg",
                        precio: 15000
                        },
                        {
                        id: "c8",  
                        nombre: "Microbloqueo VIII",
                        foto: "src/assets/photos/microbloqueo_8.jpg",
                        precio: 15000
                        },
                        {
                        id: "c9",  
                        nombre: "Microbloqueo IX",
                        foto: "src/assets/photos/microbloqueo_9.jpg",
                        precio: 15000
                        },
                        {
                        id: "c10",  
                        nombre: "Microbloqueo X",
                        foto: "src/assets/photos/microbloqueo_10.jpg",
                        precio: 15000
                        },
                        {
                        id: "c11",  
                        nombre: "Microbloqueo XI",
                        foto: "src/assets/photos/microbloqueo_11.jpg",
                        precio: 15000
                        },
                        {
                        id: "c12",  
                        nombre: "Microbloqueo XII",
                        foto: "src/assets/photos/microbloqueo_12.jpg",
                        precio: 15000
                        },
                        {
                        id: "c13",  
                        nombre: "Microbloqueo XIII",
                        foto: "src/assets/photos/microbloqueo_13.jpg",
                        precio: 15000
                        },
                        {
                        id: "c14",  
                        nombre: "Microbloqueo XIV",
                        foto: "src/assets/photos/microbloqueo_14.jpg",
                        precio: 15000
                        },
                        {
                        id: "c15",  
                        nombre: "Microbloqueo XV",
                        foto: "src/assets/photos/microbloqueo_15.jpg",
                        precio: 15000
                        },
                        {
                        id: "c16",  
                        nombre: "Microbloqueo XVI",
                        foto: "src/assets/photos/microbloqueo_16.jpg",
                        precio: 15000
                        }
]

export const getProductosCollage = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productosCollage)
        },3000)
    })
}
