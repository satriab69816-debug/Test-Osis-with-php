const SECTIONS={
"1":{name:"Sekbid 1",title:"Kerohanian dan Ketakwaan"},
"2":{name:"Sekbid 2",title:"Kehidupan Berbangsa dan Bernegara"},
"3":{name:"Sekbid 3",title:"Berorganisasi dan Pendidikan"},
"4":{name:"Sekbid 4",title:"Keterampilan dan Kewirausahaan"},
"5":{name:"Sekbid 5",title:"Kesehatan dan Olahraga"},
"6":{name:"Sekbid 6",title:"Kreativitas Seni Sastra dan Budaya"},
"7":{name:"Sekbid 7",title:"Dokumentasi, Publikasi, dan Komunikasi"}
};
const QUESTIONS=[
["Saat kegiatan sekolah dimulai, saya lebih tertarik...","1|Memimpin doa bersama","2|Menjadi petugas upacara","3|Mengatur jalannya kegiatan","7|Menyampaikan informasi acara"],
["Dalam kerja kelompok, saya biasanya...","3|Membagi tugas dan membuat jadwal","4|Memikirkan produk yang bisa dibuat","5|Mengajak teman melakukan aktivitas fisik","6|Membuat konsep kreatif"],
["Jika sekolah mengadakan bazar, saya ingin...","4|Membuat dan menjual produk","7|Membuat poster dan promosi","3|Mengatur pembagian tugas","6|Mendesain dekorasi"],
["Kegiatan yang paling menarik bagi saya adalah...","1|Kegiatan keagamaan","2|Upacara dan wawasan kebangsaan","5|Pertandingan olahraga","6|Pentas seni"],
["Ketika melihat masalah dalam organisasi, saya cenderung...","3|Menganalisis dan mencari solusi","7|Mencari cara menyampaikan masalah","4|Mencari solusi yang bisa menghasilkan produk","1|Mengajak berdiskusi dengan tenang"],
["Saya paling nyaman ketika...","7|Berbicara di depan banyak orang","6|Menulis atau membuat karya seni","3|Memimpin diskusi","5|Berlatih fisik"],
["Untuk memperingati hari nasional, saya tertarik...","2|Menjadi petugas upacara","6|Menampilkan seni budaya","7|Mendokumentasikan kegiatan","3|Menjadi koordinator acara"],
["Saya suka belajar dengan cara...","3|Diskusi dan praktik organisasi","6|Membuat karya visual","5|Praktik langsung dan bergerak","1|Refleksi dan pembinaan diri"],
["Jika diberi modal untuk kegiatan kelas, saya akan...","4|Membuat usaha kecil","3|Menyusun perencanaan keuangan","7|Mempromosikan produk","6|Membuat kemasan menarik"],
["Dalam acara sekolah, peran yang paling saya pilih...","7|Fotografer/videografer","6|Penampil seni","3|Koordinator lapangan","5|Tim olahraga"],
["Saya tertarik mengembangkan...","4|Keterampilan bisnis","2|Wawasan kebangsaan","1|Kegiatan kerohanian","3|Kemampuan organisasi"],
["Jika teman kesulitan belajar, saya akan...","3|Membantu menjelaskan materi","7|Membuat materi menjadi menarik","6|Membuat media belajar kreatif","4|Mencari ide produk edukatif"],
["Ketika ada pertandingan antarsekolah, saya ingin...","5|Menjadi pemain/pelatih","7|Membuat dokumentasi","3|Mengatur jadwal pertandingan","6|Membuat poster pertandingan"],
["Saya menikmati aktivitas...","1|Pembinaan spiritual","2|Diskusi kenegaraan","4|Membuat kerajinan","5|Olahraga"],
["Dalam rapat, saya lebih suka...","3|Menyusun agenda dan keputusan","7|Menyampaikan hasil rapat","2|Membahas kegiatan nasional","1|Membahas nilai dan kebersamaan"],
["Jika diminta membuat konten OSIS, saya akan...","7|Membuat video pendek","6|Membuat ilustrasi","4|Membuat konten promosi usaha","3|Menyusun konsep kampanye"],
["Saya tertarik mengikuti...","6|Lomba puisi/seni","5|Lomba olahraga","2|Debat kebangsaan","4|Kompetisi kewirausahaan"],
["Saat sekolah mengadakan kegiatan sosial, saya akan...","1|Menggalang kepedulian dan doa","3|Mengatur relawan","7|Membuat publikasi","5|Membantu kegiatan lapangan"],
["Saya ingin dikenal sebagai siswa yang...","3|Terorganisir","4|Kreatif dan mandiri","6|Artistik","7|Komunikatif"],
["Jika mendapat tugas presentasi, saya...","7|Percaya diri menjelaskan","3|Menyusun alur materi","6|Membuat visual presentasi","2|Membawa sudut pandang kebangsaan"],
["Saya paling menikmati waktu luang dengan...","5|Berolahraga","6|Membaca/menulis karya","4|Mencoba ide bisnis","1|Mengikuti kegiatan keagamaan"],
["Dalam acara besar, saya lebih memperhatikan...","7|Informasi dan dokumentasi","3|Alur dan koordinasi","6|Dekorasi dan penampilan","5|Kondisi kesehatan peserta"],
["Jika ada lomba antar kelas, saya ingin...","5|Bertanding","4|Membuat merchandise","7|Membuat publikasi","3|Menjadi panitia"],
["Saya tertarik belajar tentang...","4|Pemasaran","2|Sejarah dan kebangsaan","6|Seni dan budaya","3|Kepemimpinan"],
["Ketika mendapat ide baru, saya...","4|Mencoba menjadikannya produk","6|Mengubahnya menjadi karya","7|Membagikannya lewat media","3|Membuat rencana pelaksanaan"],
["Saya merasa bangga ketika...","1|Berhasil membantu kegiatan spiritual","2|Berhasil menjalankan upacara","3|Acara berjalan teratur","7|Kegiatan dikenal banyak orang"],
["Dalam tim, saya sering menjadi...","3|Koordinator","4|Pencetus ide usaha","5|Penyemangat aktivitas fisik","6|Pengembang konsep kreatif"],
["Saya ingin berkontribusi lewat...","7|Media dan komunikasi","1|Pembinaan kerohanian","2|Kegiatan nasional","4|Kewirausahaan"],
["Jika terjadi miskomunikasi, saya akan...","7|Mengklarifikasi informasi","3|Menyusun kembali pembagian tugas","2|Mengingatkan aturan bersama","1|Mengajak menyelesaikan secara baik"],
["Saya tertarik membuat...","6|Karya seni/sastra","7|Video dokumentasi","4|Produk kreatif","5|Program olahraga"],
["Sikap yang paling saya utamakan dalam organisasi...","1|Ketakwaan","2|Nasionalisme","3|Tanggung jawab","4|Kemandirian"],
["Saya ingin meningkatkan kemampuan...","5|Kebugaran dan kesehatan","6|Seni dan budaya","7|Public speaking","3|Kepemimpinan"],
["Jika sekolah punya akun media sosial, saya ingin...","7|Mengelola konten","6|Membuat desain","4|Membuat promosi kegiatan","3|Menyusun kalender konten"],
["Pada kegiatan OSIS berikutnya, saya ingin mencoba...","1|Menjadi panitia kegiatan rohani","2|Menjadi panitia upacara/nasional","5|Menjadi panitia olahraga","7|Menjadi tim dokumentasi"],
["Menurut saya organisasi yang baik adalah organisasi yang...","3|Terencana","4|Inovatif","6|Kreatif","7|Komunikatif"],
["Saat menghadapi kegagalan, saya biasanya...","1|Berdoa dan introspeksi diri","2|Tetap semangat demi nama baik sekolah","4|Mencari peluang usaha baru dari pengalaman itu","5|Berlatih lebih keras secara fisik"],
["Saya ingin mengisi waktu istirahat sekolah dengan...","1|Kajian atau kegiatan rohani singkat","2|Diskusi wawasan kebangsaan","4|Berjualan takjil/produk kecil","5|Olahraga ringan di lapangan"],
["Jika ditugaskan menjadi pembina adik kelas, saya akan...","1|Membina akhlak dan spiritualitas","2|Menanamkan rasa cinta tanah air","4|Mengajarkan cara berwirausaha","5|Melatih kebugaran jasmani"],
["Buku atau konten yang paling saya sukai bertema...","1|Keagamaan dan renungan","2|Sejarah perjuangan bangsa","4|Bisnis dan kewirausahaan","5|Kesehatan dan olahraga"],
["Saya ingin OSIS lebih memperhatikan...","1|Kegiatan ibadah bersama","2|Peringatan hari besar nasional","4|Pengembangan unit usaha siswa","5|Program kebugaran siswa"],
["Ketika libur panjang, saya lebih memilih...","1|Mengikuti pesantren kilat/retret rohani","2|Mengikuti kegiatan kepemudaan nasional","4|Mencoba bisnis kecil-kecilan","5|Mengikuti klub olahraga"],
["Nilai yang paling saya junjung dalam kehidupan sehari-hari...","1|Ketakwaan kepada Tuhan","2|Cinta tanah air","4|Kemandirian ekonomi","5|Pola hidup sehat"],
["Jika ada program kerja OSIS baru, saya usulkan...","1|Kegiatan keagamaan rutin","2|Lomba wawasan kebangsaan","5|Senam pagi bersama","6|Pentas seni bulanan"],
["Saya lebih suka menjadi bagian dari kepanitiaan...","1|Kerohanian pada acara sekolah","2|Upacara bendera dan hari nasional","5|Pertandingan olahraga antar kelas","6|Pameran seni dan budaya"],
["Ketika ada teman berbuat salah, saya...","1|Mengingatkan dengan nilai-nilai agama","2|Mengingatkan tentang aturan dan kedisiplinan","5|Mengajaknya berolahraga untuk menenangkan diri","6|Mengungkapkannya lewat tulisan/karya"],
["Saya ingin belajar lebih dalam soal...","1|Toleransi antar umat beragama","2|Bela negara dan wawasan kebangsaan","5|Gizi dan kebugaran tubuh","6|Sastra dan seni pertunjukan"],
["Jika sekolah kedatangan tamu penting, saya ingin membantu...","1|Menyiapkan doa pembuka acara","2|Menjadi petugas penghormatan/pengibar bendera","6|Menjadi penerima tamu dengan sentuhan seni budaya","7|Mendokumentasikan kunjungan tersebut"],
["Saya merasa paling berguna ketika...","1|Mengingatkan teman untuk beribadah","2|Menjaga semangat kebangsaan di sekolah","7|Membagikan informasi penting ke banyak orang","4|Membantu teman memulai usaha kecil"]
].map(x=>({q:x[0],opts:x.slice(1).map(v=>{let [cat,text]=v.split("|");return{cat,text}})}));

let state={user:null,index:0,answers:[],scores:null,result:null,isAdmin:false};
const $=id=>document.getElementById(id);
function show(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));$(id).classList.add("active");$("logoutBtn").hidden=!["quiz","admin","result"].includes(id);window.scrollTo({top:0,behavior:"smooth"})}
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>show(b.dataset.go)));

const API_BASE="api/";
async function api(path,opts={}){
 let res;
 try{
  res=await fetch(API_BASE+path,{headers:{"Content-Type":"application/json"},credentials:"same-origin",...opts});
 }catch(netErr){
  throw new Error("Tidak bisa menghubungi server. Cek koneksi internet atau apakah file di folder api/ sudah diupload.");
 }
 let text=await res.text();
 let data=null;
 try{data=JSON.parse(text)}catch(e){}
 if(!data){
  console.error("Respons mentah dari "+path+" (status "+res.status+"):",text);
  let petunjuk="";
  if(res.status===404)petunjuk=`File ${API_BASE}${path} tidak ditemukan di server. Pastikan folder api/ sudah diupload ke htdocs.`;
  else if(res.status===403)petunjuk="Akses ke file PHP ditolak server (403).";
  else if(/<br|<b>|Fatal error|Warning|Notice|Parse error/i.test(text))petunjuk="Server mengirim pesan error PHP, bukan JSON. Cek Console browser (F12) untuk isi lengkapnya.";
  else if(/<!DOCTYPE|<html/i.test(text))petunjuk="Server mengirim halaman HTML, bukan JSON. Kemungkinan PHP tidak aktif atau path api/ salah.";
  else petunjuk="Respons server kosong atau tidak dikenali.";
  throw new Error(petunjuk+" (status HTTP "+res.status+"). Coba buka "+API_BASE+"test.php di browser untuk mendiagnosis.");
 }
 if(!res.ok&&res.status!==401&&res.status!==403)throw new Error(data.message||"Terjadi kesalahan pada server.");
 return data;
}

const REQUIRED_PARTICIPANT_CODE="OSIS2026-2027";

$("participantForm").addEventListener("submit",e=>{
 e.preventDefault();
 let kode=$("pCode").value.trim();
 if(kode.toUpperCase()!==REQUIRED_PARTICIPANT_CODE){
  alert(`Kode peserta salah. Masukkan kode unik yang benar dari panitia (${REQUIRED_PARTICIPANT_CODE}).`);
  return;
 }
 state.user={name:$("pName").value.trim(),kelas:$("pClass").value.trim(),absen:$("pAbsent").value,kode};
 state.index=0;state.answers=Array(QUESTIONS.length).fill(null);show("quiz");renderQuestion()
});

$("adminForm").addEventListener("submit",async e=>{
 e.preventDefault();
 let btn=e.target.querySelector("button");btn.disabled=true;
 try{
  let data=await api("admin_login.php",{method:"POST",body:JSON.stringify({username:$("adminUser").value,password:$("adminPass").value})});
  if(data.success){state.isAdmin=true;show("admin");await renderAdmin()}
  else alert(data.message||"Username atau password salah.");
 }catch(err){alert(err.message)}
 finally{btn.disabled=false}
});

$("logoutBtn").addEventListener("click",async()=>{
 if(state.isAdmin){try{await api("admin_logout.php",{method:"POST"})}catch(e){}}
 state={user:null,index:0,answers:[],isAdmin:false};show("landing")
});

function renderQuestion(){
 let i=state.index,item=QUESTIONS[i];$("quizTitle").textContent=`Soal ${i+1}`;$("qNumber").textContent=`SOAL ${String(i+1).padStart(2,"0")}`;$("questionText").textContent=item.q;$("progressText").textContent=`${i+1} / ${QUESTIONS.length}`;$("progressBar").style.width=`${((i+1)/QUESTIONS.length)*100}%`;
 $("options").innerHTML=item.opts.map((o,j)=>`<button class="option ${state.answers[i]===j?"selected":""}" data-i="${j}"><span class="letter">${String.fromCharCode(65+j)}</span><span>${o.text}</span></button>`).join("");
 document.querySelectorAll(".option").forEach(b=>b.onclick=()=>{state.answers[i]=+b.dataset.i;renderQuestion()});
 $("prevBtn").disabled=i===0;$("nextBtn").textContent=i===QUESTIONS.length-1?"Selesai & Lihat Hasil":"Berikutnya →";
}
$("prevBtn").onclick=()=>{if(state.index>0){state.index--;renderQuestion()}};
$("nextBtn").onclick=()=>{if(state.answers[state.index]===null){alert("Pilih salah satu jawaban terlebih dahulu.");return} if(state.index<QUESTIONS.length-1){state.index++;renderQuestion()}else finishQuiz()};

function finishQuiz(){
 let scores=Object.fromEntries(Object.keys(SECTIONS).map(k=>[k,0]));
 state.answers.forEach((a,i)=>{if(a!==null)scores[QUESTIONS[i].opts[a].cat]++});
 let ranked=Object.entries(scores).sort((a,b)=>b[1]-a[1]);state.scores=scores;state.result=ranked[0][0];
 $("resultTitle").textContent=`Hasil untuk ${state.user.name}`;$("resultSummary").textContent=`Kecenderungan utama kamu adalah ${SECTIONS[state.result].name} — ${SECTIONS[state.result].title}.`;
 $("resultGrid").innerHTML=ranked.map(([k,v])=>`<div class="score-box"><b>${v}</b><span>${SECTIONS[k].name}</span></div>`).join("");
 $("mainResult").innerHTML=`<span class="eyebrow">REKOMENDASI UTAMA</span><strong>${SECTIONS[state.result].name}</strong><p>${SECTIONS[state.result].title}</p><small>Skor ${scores[state.result]} dari ${QUESTIONS.length} pilihan yang berkontribusi pada bidang ini.</small>`;
 saveResult();
 show("result");
}
$("finishBtn").onclick=()=>{state={user:null,index:0,answers:[]};show("landing")};

let cachedResults=[];

async function saveResult(){
 let btn=$("finishBtn");if(btn)btn.disabled=true;
 try{
  await api("save_result.php",{method:"POST",body:JSON.stringify({
   name:state.user.name,kelas:state.user.kelas,absen:state.user.absen,kode:state.user.kode,
   scores:state.scores,result:state.result,
   resultLabel:`${SECTIONS[state.result].name} — ${SECTIONS[state.result].title}`,
   topScore:state.scores[state.result]||0
  })});
 }catch(err){
  console.error(err);
  alert("Hasil tidak bisa disimpan ke server: "+err.message+"\n\nHasil tetap tampil di layar ini, tapi tidak masuk ke dashboard panitia.");
 }
 finally{if(btn)btn.disabled=false}
}

async function renderAdmin(){
 $("participantTable").innerHTML=`<tr><td colspan="7">Memuat data...</td></tr>`;
 try{
  let data=await api("get_results.php");
  cachedResults=data.data||[];
 }catch(err){
  $("participantTable").innerHTML=`<tr><td colspan="7">Gagal memuat data: ${esc(err.message)}</td></tr>`;
  return;
 }
 let arr=cachedResults,q=$("searchInput").value.toLowerCase();
 let filtered=arr.filter(x=>[x.nama,x.kelas,x.kode,x.hasil_nama].join(" ").toLowerCase().includes(q));
 $("totalParticipants").textContent=arr.length;
 $("todayParticipants").textContent=arr.filter(x=>new Date(x.waktu).toDateString()===new Date().toDateString()).length;
 let counts={};arr.forEach(x=>counts[x.hasil_kode]=(counts[x.hasil_kode]||0)+1);
 let top=Object.entries(counts).sort((a,b)=>b[1]-a[1])[0];
 $("topSection").textContent=top&&SECTIONS[top[0]]?SECTIONS[top[0]].name:"—";
 $("participantTable").innerHTML=filtered.map((x,i)=>`<tr><td>${i+1}</td><td><b>${esc(x.nama)}</b><br><small>${esc(String(x.absen))}</small></td><td>${esc(x.kelas)}</td><td>${esc(x.kode)}</td><td><span class="badge">${esc(x.hasil_nama)}</span></td><td>${x.skor_tertinggi||0}</td><td>${new Date(x.waktu).toLocaleString("id-ID")}</td></tr>`).join("");
 $("emptyAdmin").style.display=filtered.length?"none":"block";
}
function esc(v){let d=document.createElement("div");d.textContent=v??"";return d.innerHTML}
$("searchInput").addEventListener("input",renderAdmin);
$("clearBtn").onclick=async()=>{
 if(!confirm("Hapus semua data peserta dari database?"))return;
 try{await api("clear_results.php",{method:"POST"});await renderAdmin()}
 catch(err){alert("Gagal menghapus data: "+err.message)}
};
$("exportBtn").onclick=()=>{
 if(!cachedResults.length){alert("Belum ada data.");return}
 let head=["Nama","Kelas","Absen","Kode","Hasil","Waktu"];
 let rows=cachedResults.map(x=>[x.nama,x.kelas,x.absen,x.kode,x.hasil_nama,new Date(x.waktu).toLocaleString("id-ID")]);
 let csv=[head,...rows].map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(",")).join("\n");
 let blob=new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8"});
 let a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="rekap-peserta-osis-2026.csv";a.click();URL.revokeObjectURL(a.href)
};
