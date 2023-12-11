const propiedadesEnAlquiler = [
    { 
        name: 'Este apartamento de 2 habitaciones est\u00e1 ubicado en el coraz\u00f3n de la ciudad, cerca de todo.',
        imgSrc: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        desc: 'Este apartamento de lujo est\u00e1 ubicado en una exclusiva zona residencial',
        address: '123 Main Street, Anytown, CA 91234',
        rooms: 2,
        baths: 2,
        price: 2000,
        smoke: false,
        pets: true 
    },      
    { 
        name: 'Apartamento luminoso con vista al mar',
        imgSrc: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        desc: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        address: '456 Ocean Avenue, Seaside Town, CA 56789',
        rooms: 3,
        baths: 3,
        price: 2500,
        smoke: true,
        pets: true 
    },
    { 
        name: 'Condominio moderno en zona residencial',
        imgSrc: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        desc: 'Este elegante condominio moderno est\u00e1 ubicado en una tranquila zona residencial',
        address: '123 Main Street, Anytown, CA 91234',
        rooms: 2,
        baths: 2,
        price: 2200,
        smoke: false,
        pets: false  
    } ,
    { 
        name: 'Mi propia casa de lujo en Las Vegas',
        imgSrc: 'https://3826222.fs1.hubspotusercontent-na1.net/hub/3826222/hubfs/casa-lujo.jpg',
        desc: 'Muy elegante y con terminaciones de oro macizo',
        address: '123341 Main, Whereveer, CA 999666',
        rooms: 7,
        baths: 3,
        price: 90800,
        smoke: false,
        pets: true  
    } ,
    { 
        name: 'Condominio antiguo estilo Holandes',
        imgSrc: 'https://img.jamesedition.com/listing_images/2022/11/21/11/56/06/30097c4e-4421-4376-9b17-8e6d7326adc1/je/507x312xc.jpg',
        desc: 'Zona exclusiva de Arica',
        address: '451 Avenida del Sol, Arica, CA 3322111',
        rooms: 12,
        baths: 5,
        price: 67000,
        smoke: true,
        pets: true  
    } ,
    { 
        name: 'Casa exclusiva Las Palmas Recreacion',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh0D7P6OG01OVUmIMXTl6NZjCriWQ44B0J-A&usqp=CAU',
        desc: 'Todo incluido y listo, exclusivo y elegante, no te defraudara',
        address: '830 Calle Los Palmos, Maipu, CA 3211',
        rooms: 17,
        baths: 10,
        price: 89000,
        smoke: false,
        pets: false  
    } 
];

function renderizarPropiedadesEnAlquiler() {
    let contenedor;
    let limite;

    if (document.getElementById('propiedadesAlquilerIndex')) {
        contenedor = document.getElementById('propiedadesAlquilerIndex');
        limite = 3;
    } else if (document.getElementById('propiedadesAlquiler')) {
        contenedor = document.getElementById('propiedadesAlquiler');
        limite = propiedadesEnAlquiler.length;
    }

    for (let i = 0; i < limite; i++) {
        const propiedad = propiedadesEnAlquiler[i];

        const divCol = document.createElement('div');
        divCol.className = 'col-md-4 mb-4';

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        divCol.appendChild(cardDiv);

        const img = document.createElement('img');
        img.src = propiedad.imgSrc;
        img.className = 'card-img-top';
        img.alt = propiedad.name;
        cardDiv.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardDiv.appendChild(cardBody);

        cardBody.innerHTML = `
            <h5 class="card-title">${propiedad.name}</h5>
            <p class="card-text">${propiedad.desc}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.address}</p>
            <p>
                <i class="fas fa-bed"></i> ${propiedad.rooms} Habitaciones |
                <i class="fas fa-bath"></i> ${propiedad.baths} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.price}</p>
            <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
            </p>
            <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                <i class="${propiedad.pets ? 'fas fa-paw' : 'fa-solid fa-ban'}"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
            </p>
        `;

        contenedor.appendChild(divCol);
    }
}
document.addEventListener('DOMContentLoaded', renderizarPropiedadesEnAlquiler);