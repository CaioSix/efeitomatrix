// pegando elemento do canvas do html
const c = document.getElementById("matrix");
c.height = window.innerHeight;
c.width = window.innerWidth;

// definindo o contexto em que ele ira trabalhar, 2d ou 3d

const ctx = c.getContext("2d");

// fillRect(eixoX, eixoY, largura, altura)
// ctx.fillRect(0, 0, c.width, c.height);

// definindo o tamanho e tipo de fonte
// ctx.font = `60px arial`;

//deixando letras verdest
// ctx.fillStyle = "#0F0";

// definindo o texto a ser escrito e posição x, y a posicao iniciaç deve ser a mesma do tamanho da fonte
// ctx.fillText("Matrix Rain", 0, 60);

//alfabeto estranho 
const letters = ["日","ﾊ","ﾐ","ﾋ","ｰ","ｳ","ｼ","ﾅ","ﾓ","ﾆ","ｻ","ﾜ","ﾂ","ｵ","ﾘ","ｱ","ﾎ","ﾃ","ﾏ","ｹ","ﾒ","ｴ","ｶ","ｷ","ﾑ","ﾕ","ﾗ","ｾ","ﾈ","ｽ","ﾀ","ﾇ","ﾍ",":","・",".","=","*","+","-","<",">","¦","｜","ﾘ"];

const fontSize = 18

// definindo quantas colunas serão necessárias pelo tamanho da tela e fonte
const columns = c.width / fontSize;

// criando um array para cada gota, sempre iniciando na posição do y=1
const drops = new Array(Math.floor(columns)).fill(1);

function draw() {

    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);
  
    // definindo a cor e estilo da fonte
    ctx.fillStyle = "#0F0";
    ctx.font = `${fontSize}px arial`;
  
    for (let i = 0; i < drops.length; i++) {
      // pegando uma letra randomicamente no nosso array
      const text = letters[Math.floor(Math.random() * letters.length)];
  
      // escrevendo na tela
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      drops[i]++
      if (drops[i] * fontSize > c.height && Math.random() > 0.95) {
        drops[i] = 0;
      }
      
    }
  
    // chamada recursiva para animar quadro a quadro
    window.requestAnimationFrame(draw);
  }
  
  // chamando a função criada
  draw()