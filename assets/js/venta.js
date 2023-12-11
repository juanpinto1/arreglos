const propiedadesEnVenta = [
    { 
        name: 'Apartamento de lujo en zona exclusiva',
        imgSrc: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        desc: 'Este apartamento de lujo est\u00e1 ubicado en una exclusiva zona residencial',
        address: '123 Luxury Lane, Prestige Suburb, CA 45678',
        rooms: 4,
        baths: 4,
        price: 5000,
        smoke: false,
        pets: false 
    },      
    { 
        name: 'Apartamento acogedor en la monta\u00f1a',
        imgSrc: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        desc: 'Este apartamento acogedor est\u00e1 situado en lo alto de una monta\u00f1a con impresionantes vistas',
        address: '789 Mountain Road, Summit Peaks, CA 23456',
        rooms: 2,
        baths: 1,
        price: 1200,
        smoke: true,
        pets: true 
    },
    { 
        name: 'Penthouse de lujo con terraza panor\u00e1mica',
        imgSrc: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        desc: 'Este penthouse de lujo ofrece una terraza panor\u00e1mica con vistas espectaculares',
        address: '567 Skyline Avenue, Skyview City, CA 56789',
        rooms: 3,
        baths: 3,
        price: 4500,
        smoke: false,
        pets: true  
    } ,
    { 
        name: 'Penthouse Vitacura Lujo',
        imgSrc: 'https://img.jamesedition.com/listing_images/2023/06/30/15/29/55/7daa55f0-9ad3-434b-b7f4-31571ecff17f/je/507x312xc.jpg',
        desc: 'Vista a Santiago de Chile espectacular',
        address: '5678 Avenida La Piramide, Santiago, CA 4532',
        rooms: 8,
        baths: 6,
        price: 64500,
        smoke: false,
        pets: false  
    } ,
    { 
        name: 'Casa de papa noel',
        imgSrc: 'https://media.traveler.es/photos/63907d952653402238bc9ffd/16:9/w_1920,c_limit/850_4271.jpg',
        desc: 'Tiene una vista a los andes impresionante',
        address: '1586 Navidad, polo norte, Alaska 343333',
        rooms: 2,
        baths: 1,
        price: 6300,
        smoke: true,
        pets: true  
    } ,
    { 
        name: 'Casa en el bosque, con excelente cilma',
        imgSrc: 'https://z-p3-scontent.fscl18-1.fna.fbcdn.net/v/t1.6435-9/51398914_595988284199638_5369077327546286080_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=vnNK4rFuzYcAX_I5G-N&_nc_ht=z-p3-scontent.fscl18-1.fna&oh=00_AfCw7j12HpaHO675OkQVdmpO1FPu9W1gGKy5ej_tAvUVVg&oe=659E0227',
        desc: 'Ofrece paseos en caballo a diario',
        address: '9623 el camino milagroso, CA 4332233',
        rooms: 3,
        baths: 2,
        price: 1700,
        smoke: false,
        pets: true  
    } 
];




function renderizarPropiedadesEnVenta() {
    let contenedor;
    let limite;

    if (document.getElementById('propiedadesVentaIndex')) {
        contenedor = document.getElementById('propiedadesVentaIndex');
        limite = 3;
    } else if (document.getElementById('propiedadesVenta')) {
        contenedor = document.getElementById('propiedadesVenta');
        limite = propiedadesEnVenta.length;
    }

    for (let i = 0; i < limite; i++) {
        const propiedad = propiedadesEnVenta[i];

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

document.addEventListener('DOMContentLoaded', renderizarPropiedadesEnVenta);