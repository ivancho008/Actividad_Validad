const formulario = document.getElementById('formularioAvanzado');
const btnEnviar = document.getElementById('btnEnviar');
const barraProgreso = document.getElementById('barraProgreso');
const porcentajeProgreso = document.getElementById('porcentajeProgreso');

const campos = {
  nombre: false,
  apellido: false,
  correo: false,
  password: false,
  confirmarPassword: false
};

function actualizarProgreso() {
  const totalCampos = Object.keys(campos).length;
  const camposValidos = Object.values(campos).filter(v => v).length;
  const porcentaje = (camposValidos / totalCampos) * 100;

  barraProgreso.style.width = porcentaje + '%';
  porcentajeProgreso.textContent = Math.round(porcentaje) + '%';

  btnEnviar.disabled = camposValidos !== totalCampos;
}

// Validar nombre
document.getElementById('nombre').addEventListener('input', function () {
  const valor = this.value.trim();
  const error = document.getElementById('errorNombre');
  const exito = document.getElementById('exitoNombre');

  if (valor.length >= 2) {
    error.style.display = 'none';
    exito.textContent = '✓ Nombre válido';
    exito.style.display = 'inline';
    this.classList.add('valido');
    this.classList.remove('invalido');
    campos.nombre = true;
  } else {
    error.textContent = 'El nombre debe tener al menos 2 caracteres';
    error.style.display = 'block';
    exito.style.display = 'none';
    this.classList.add('invalido');
    this.classList.remove('valido');
    campos.nombre = false;
  }
  actualizarProgreso();
});

// Validar apellido
document.getElementById('apellido').addEventListener('input', function () {
  const valor = this.value.trim();
  const error = document.getElementById('errorApellido');
  const exito = document.getElementById('exitoApellido');

  if (valor.length >= 2) {
    error.style.display = 'none';
    exito.textContent = '✓ Apellido válido';
    exito.style.display = 'inline';
    this.classList.add('valido');
    this.classList.remove('invalido');
    campos.apellido = true;
  } else {
    error.textContent = 'El apellido debe tener al menos 2 caracteres';
    error.style.display = 'block';
    exito.style.display = 'none';
    this.classList.add('invalido');
    this.classList.remove('valido');
    campos.apellido = false;
  }
  actualizarProgreso();
});

// Validar correo
document.getElementById('correo').addEventListener('input', function () {
  const valor = this.value.trim();
  const error = document.getElementById('errorCorreo');
  const exito = document.getElementById('exitoCorreo');
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regexEmail.test(valor)) {
    error.style.display = 'none';
    exito.textContent = '✓ Email válido';
    exito.style.display = 'inline';
    this.classList.add('valido');
    this.classList.remove('invalido');
    campos.correo = true;
  } else {
    error.textContent = 'Formato de email inválido';
    error.style.display = 'block';
    exito.style.display = 'none';
    this.classList.add('invalido');
    this.classList.remove('valido');
    campos.correo = false;
  }
  actualizarProgreso();
});

// Validar contraseña
document.getElementById('password').addEventListener('input', function () {
  const valor = this.value;
  const error = document.getElementById('errorPassword');
  const exito = document.getElementById('exitoPassword');

  const tieneLongitud = valor.length >= 8;
  const tieneNumero = /\d/.test(valor);
  const tieneSimbolo = /[^A-Za-z0-9]/.test(valor);

  if (!tieneLongitud) {
    error.textContent = 'La contraseña debe tener al menos 8 caracteres';
    error.style.display = 'block';
    exito.style.display = 'none';
    this.classList.add('invalido');
    this.classList.remove('valido');
    campos.password = false;
  } else if (!tieneNumero || !tieneSimbolo) {
    error.textContent = 'La contraseña debe incluir números y símbolos';
    error.style.display = 'block';
    exito.style.display = 'none';
    this.classList.add('invalido');
    this.classList.remove('valido');
    campos.password = false;
  } else {
    error.style.display = 'none';
    exito.textContent = '✓ Contraseña válida';
    exito.style.display = 'inline';
    this.classList.add('valido');
    this.classList.remove('invalido');
    campos.password = true;
  }

  // Actualizar confirmación de contraseña
  document.getElementById('confirmarPassword').dispatchEvent(new Event('input'));

  actualizarProgreso();
});

// Validar confirmar contraseña
document.getElementById('confirmarPassword').addEventListener('input', function () {
  const valor = this.value;
  const password = document.getElementById('password').value;
  const error = document.getElementById('errorConfirmar');
  const exito = document.getElementById('exitoConfirmar');

  if (valor === password && valor.length > 0) {
    error.style.display = 'none';
    exito.textContent = '✓ Contraseñas coinciden';
    exito.style.display = 'inline';
    this.classList.add('valido');
    this.classList.remove('invalido');
    campos.confirmarPassword = true;
  } else {
    error.textContent = 'Las contraseñas no coinciden';
    error.style.display = 'block';
    exito.style.display = 'none';
    this.classList.add('invalido');
    this.classList.remove('valido');
    campos.confirmarPassword = false;
  }
  actualizarProgreso();
});

// Bloquear pegar, copiar y cortar para correo y contraseñas
['correo', 'password', 'confirmarPassword'].forEach(id => {
  const campo = document.getElementById(id);
  ['paste', 'copy', 'cut'].forEach(evt => {
    campo.addEventListener(evt, e => e.preventDefault());
  });
});

// Envío del formulario
formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  const datosFormulario = new FormData(formulario);
  let resumenHTML = '';

  for (let [campo, valor] of datosFormulario.entries()) {
    if (valor.trim() !== '') {
      const nombreCampo = {
        nombre: 'Nombre',
        apellido: 'Apellido',
        correo: 'Correo electrónico',
        password: 'Contraseña',
        confirmarPassword: 'Confirmación contraseña'
      }[campo] || campo;

      resumenHTML += `<div class="dato-resumen">
        <span class="etiqueta-resumen">${nombreCampo}:</span> ${campo.includes('password') ? '••••••••' : valor}
      </div>`;
    }
  }

  document.getElementById('contenidoResumen').innerHTML = resumenHTML;
  document.getElementById('resumenDatos').style.display = 'block';
  document.getElementById('resumenDatos').scrollIntoView({ behavior: 'smooth' });
});

// Botón reiniciar
document.getElementById('btnReiniciar').addEventListener('click', function () {
  formulario.reset();
  document.getElementById('resumenDatos').style.display = 'none';

  Object.keys(campos).forEach(campo => campos[campo] = false);

  // Limpiar estilos y mensajes
  [...formulario.elements].forEach(elem => {
    elem.classList.remove('valido', 'invalido');
  });

  document.querySelectorAll('.mensaje-error, .mensaje-exito').forEach(elem => {
    elem.style.display = 'none';
    elem.textContent = '';
  });

  barraProgreso.style.width = '0%';
  porcentajeProgreso.textContent = '0%';
  btnEnviar.disabled = true;
});
