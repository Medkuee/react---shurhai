const politics = [
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны дотор бүртгэнэ",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Нөхөн сонгуулийн хуанли",
    writer: "Д.Баасансүх",
    date: "2021/08/13",
    comments: "0",
    text: "Ирэх аравдугаар сард УИХ-ын 18 болон 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт болно.",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "МАН Хэнтийд Н.Энхбаатарыг нэр дэвшүүлэх магадлал өндөр байна",
    writer: "Д.Баасансүх",
    date: "2021/08/11",
    comments: "4",
    text: "Хэнтий аймаг, Сонгино Хайрхан дүүрэг буюу УИХ-ын сонгуулийн 18, 28 дугаар тойргийн нөхөн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "УИХ-ын хоёр тойрогт явагдах нөхөн сонгуульд оролцохоо илэрхийлсэн 9 нам, нэг эвсэл",
    writer: "Д.Баасансүх",
    date: "2021/08/10",
    comments: "0",
    text: "УИХ-ын 18, 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт 2021 оны аравдугаар сарын 10-нд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхийлөгч У.Хүрэлсүхийн зөвлөхүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/09",
    comments: "2",
    text: "2021 оны Ерөнхийлөгчийн сонгуульд МАН-аас нэр дэвшигч У.Хүрэлсүх үнэмлэхүй ялалт байгуулж,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/shuurhailogo%20(1)%20(6).jpg&w=700&h=480",
    title: "Сорилтоор дүүрэн Л.Оюун-Эрдэнийн өдрүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/03",
    comments: "2",
    text: "Л.Оюун-Эрдэнэ Ерөнхий сайдаар томилогдоод зургаан сар гаруй боллоо. Анх болоход нь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/30",
    comments: "0",
    text: "Ерөнхий сайд Л.Оюун-Эрдэнэ долоо хоногийн өмнө “Ковидын үед олимп үзэхээр явлаа”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Л.Оюун-Эрдэнэ: Олон үйл явдал давхацсан, өргөн цар хүрээтэй айлчлал боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/29",
    comments: "0",
    text: "Японд Улсад ажлын айлчлал хийсэн Монгол Улсын Ерөнхий сайд Л.Оюун-Эрдэнэ өнөөдөр эх орондоо",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "АН-ын хагарал орон нутаг руу “нүүсэн” үү?",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "3",
    text: "Ардчилсан намд 2020 оны УИХ-ын өмнөөс эхэлсэн талцал хагарал улам гүнзгийрч орон нутаг дахь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Шинээр сонгогдсон гишүүдийн ХОМ-2",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "0",
    text: "АТГ-аас төрийн албан хаагчдын 2020 оны хөрөнгө орлогын мэдүүлгийн хураангуйг олон нийтэд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zz.jpg&w=700&h=480",
    title: "Олимпийн нээлт ба Л.Оюун-Эрдэнийн айлчлал",
    writer: "Д.Баасансүх",
    date: "2021/07/26",
    comments: "0",
    text: "Монгол Улсын 32 дахь Ерөнхий сайд гадаад дахь анхны айлчлалаа Их наран улсаас эхэллээ. Энэ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/terguun.jpg&w=700&h=480",
    title:
      "ТОКИО 2020: Нээлтийн ёслолд 11 улсын төр, засгийн тэргүүнүүд оролцжээ",
    writer: "Г.Очир",
    date: "2021/07/24",
    comments: "0",
    text: "Баасан гарагт Токио 2020 зуны олимпын наадам албан ёсоор нээгдсэн билээ. Нээлтийн ёслол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны дотор бүртгэнэ",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Нөхөн сонгуулийн хуанли",
    writer: "Д.Баасансүх",
    date: "2021/08/13",
    comments: "0",
    text: "Ирэх аравдугаар сард УИХ-ын 18 болон 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт болно.",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "МАН Хэнтийд Н.Энхбаатарыг нэр дэвшүүлэх магадлал өндөр байна",
    writer: "Д.Баасансүх",
    date: "2021/08/11",
    comments: "4",
    text: "Хэнтий аймаг, Сонгино Хайрхан дүүрэг буюу УИХ-ын сонгуулийн 18, 28 дугаар тойргийн нөхөн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "УИХ-ын хоёр тойрогт явагдах нөхөн сонгуульд оролцохоо илэрхийлсэн 9 нам, нэг эвсэл",
    writer: "Д.Баасансүх",
    date: "2021/08/10",
    comments: "0",
    text: "УИХ-ын 18, 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт 2021 оны аравдугаар сарын 10-нд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхийлөгч У.Хүрэлсүхийн зөвлөхүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/09",
    comments: "2",
    text: "2021 оны Ерөнхийлөгчийн сонгуульд МАН-аас нэр дэвшигч У.Хүрэлсүх үнэмлэхүй ялалт байгуулж,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/shuurhailogo%20(1)%20(6).jpg&w=700&h=480",
    title: "Сорилтоор дүүрэн Л.Оюун-Эрдэнийн өдрүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/03",
    comments: "2",
    text: "Л.Оюун-Эрдэнэ Ерөнхий сайдаар томилогдоод зургаан сар гаруй боллоо. Анх болоход нь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/30",
    comments: "0",
    text: "Ерөнхий сайд Л.Оюун-Эрдэнэ долоо хоногийн өмнө “Ковидын үед олимп үзэхээр явлаа”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Л.Оюун-Эрдэнэ: Олон үйл явдал давхацсан, өргөн цар хүрээтэй айлчлал боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/29",
    comments: "0",
    text: "Японд Улсад ажлын айлчлал хийсэн Монгол Улсын Ерөнхий сайд Л.Оюун-Эрдэнэ өнөөдөр эх орондоо",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "АН-ын хагарал орон нутаг руу “нүүсэн” үү?",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "3",
    text: "Ардчилсан намд 2020 оны УИХ-ын өмнөөс эхэлсэн талцал хагарал улам гүнзгийрч орон нутаг дахь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Шинээр сонгогдсон гишүүдийн ХОМ-2",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "0",
    text: "АТГ-аас төрийн албан хаагчдын 2020 оны хөрөнгө орлогын мэдүүлгийн хураангуйг олон нийтэд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zz.jpg&w=700&h=480",
    title: "Олимпийн нээлт ба Л.Оюун-Эрдэнийн айлчлал",
    writer: "Д.Баасансүх",
    date: "2021/07/26",
    comments: "0",
    text: "Монгол Улсын 32 дахь Ерөнхий сайд гадаад дахь анхны айлчлалаа Их наран улсаас эхэллээ. Энэ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/terguun.jpg&w=700&h=480",
    title:
      "ТОКИО 2020: Нээлтийн ёслолд 11 улсын төр, засгийн тэргүүнүүд оролцжээ",
    writer: "Г.Очир",
    date: "2021/07/24",
    comments: "0",
    text: "Баасан гарагт Токио 2020 зуны олимпын наадам албан ёсоор нээгдсэн билээ. Нээлтийн ёслол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/terguun.jpg&w=700&h=480",
    title:
      "ТОКИО 2020: Нээлтийн ёслолд 11 улсын төр, засгийн тэргүүнүүд оролцжээ",
    writer: "Г.Очир",
    date: "2021/07/24",
    comments: "0",
    text: "Баасан гарагт Токио 2020 зуны олимпын наадам албан ёсоор нээгдсэн билээ. Нээлтийн ёслол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны дотор бүртгэнэ",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Нөхөн сонгуулийн хуанли",
    writer: "Д.Баасансүх",
    date: "2021/08/13",
    comments: "0",
    text: "Ирэх аравдугаар сард УИХ-ын 18 болон 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт болно.",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "МАН Хэнтийд Н.Энхбаатарыг нэр дэвшүүлэх магадлал өндөр байна",
    writer: "Д.Баасансүх",
    date: "2021/08/11",
    comments: "4",
    text: "Хэнтий аймаг, Сонгино Хайрхан дүүрэг буюу УИХ-ын сонгуулийн 18, 28 дугаар тойргийн нөхөн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "УИХ-ын хоёр тойрогт явагдах нөхөн сонгуульд оролцохоо илэрхийлсэн 9 нам, нэг эвсэл",
    writer: "Д.Баасансүх",
    date: "2021/08/10",
    comments: "0",
    text: "УИХ-ын 18, 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт 2021 оны аравдугаар сарын 10-нд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхийлөгч У.Хүрэлсүхийн зөвлөхүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/09",
    comments: "2",
    text: "2021 оны Ерөнхийлөгчийн сонгуульд МАН-аас нэр дэвшигч У.Хүрэлсүх үнэмлэхүй ялалт байгуулж,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/shuurhailogo%20(1)%20(6).jpg&w=700&h=480",
    title: "Сорилтоор дүүрэн Л.Оюун-Эрдэнийн өдрүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/03",
    comments: "2",
    text: "Л.Оюун-Эрдэнэ Ерөнхий сайдаар томилогдоод зургаан сар гаруй боллоо. Анх болоход нь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/30",
    comments: "0",
    text: "Ерөнхий сайд Л.Оюун-Эрдэнэ долоо хоногийн өмнө “Ковидын үед олимп үзэхээр явлаа”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Л.Оюун-Эрдэнэ: Олон үйл явдал давхацсан, өргөн цар хүрээтэй айлчлал боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/29",
    comments: "0",
    text: "Японд Улсад ажлын айлчлал хийсэн Монгол Улсын Ерөнхий сайд Л.Оюун-Эрдэнэ өнөөдөр эх орондоо",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "АН-ын хагарал орон нутаг руу “нүүсэн” үү?",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "3",
    text: "Ардчилсан намд 2020 оны УИХ-ын өмнөөс эхэлсэн талцал хагарал улам гүнзгийрч орон нутаг дахь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Шинээр сонгогдсон гишүүдийн ХОМ-2",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "0",
    text: "АТГ-аас төрийн албан хаагчдын 2020 оны хөрөнгө орлогын мэдүүлгийн хураангуйг олон нийтэд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zz.jpg&w=700&h=480",
    title: "Олимпийн нээлт ба Л.Оюун-Эрдэнийн айлчлал",
    writer: "Д.Баасансүх",
    date: "2021/07/26",
    comments: "0",
    text: "Монгол Улсын 32 дахь Ерөнхий сайд гадаад дахь анхны айлчлалаа Их наран улсаас эхэллээ. Энэ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/terguun.jpg&w=700&h=480",
    title:
      "ТОКИО 2020: Нээлтийн ёслолд 11 улсын төр, засгийн тэргүүнүүд оролцжээ",
    writer: "Г.Очир",
    date: "2021/07/24",
    comments: "0",
    text: "Баасан гарагт Токио 2020 зуны олимпын наадам албан ёсоор нээгдсэн билээ. Нээлтийн ёслол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны дотор бүртгэнэ",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Нөхөн сонгуулийн хуанли",
    writer: "Д.Баасансүх",
    date: "2021/08/13",
    comments: "0",
    text: "Ирэх аравдугаар сард УИХ-ын 18 болон 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт болно.",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "МАН Хэнтийд Н.Энхбаатарыг нэр дэвшүүлэх магадлал өндөр байна",
    writer: "Д.Баасансүх",
    date: "2021/08/11",
    comments: "4",
    text: "Хэнтий аймаг, Сонгино Хайрхан дүүрэг буюу УИХ-ын сонгуулийн 18, 28 дугаар тойргийн нөхөн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "УИХ-ын хоёр тойрогт явагдах нөхөн сонгуульд оролцохоо илэрхийлсэн 9 нам, нэг эвсэл",
    writer: "Д.Баасансүх",
    date: "2021/08/10",
    comments: "0",
    text: "УИХ-ын 18, 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт 2021 оны аравдугаар сарын 10-нд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхийлөгч У.Хүрэлсүхийн зөвлөхүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/09",
    comments: "2",
    text: "2021 оны Ерөнхийлөгчийн сонгуульд МАН-аас нэр дэвшигч У.Хүрэлсүх үнэмлэхүй ялалт байгуулж,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/shuurhailogo%20(1)%20(6).jpg&w=700&h=480",
    title: "Сорилтоор дүүрэн Л.Оюун-Эрдэнийн өдрүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/03",
    comments: "2",
    text: "Л.Оюун-Эрдэнэ Ерөнхий сайдаар томилогдоод зургаан сар гаруй боллоо. Анх болоход нь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/30",
    comments: "0",
    text: "Ерөнхий сайд Л.Оюун-Эрдэнэ долоо хоногийн өмнө “Ковидын үед олимп үзэхээр явлаа”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Л.Оюун-Эрдэнэ: Олон үйл явдал давхацсан, өргөн цар хүрээтэй айлчлал боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/29",
    comments: "0",
    text: "Японд Улсад ажлын айлчлал хийсэн Монгол Улсын Ерөнхий сайд Л.Оюун-Эрдэнэ өнөөдөр эх орондоо",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "АН-ын хагарал орон нутаг руу “нүүсэн” үү?",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "3",
    text: "Ардчилсан намд 2020 оны УИХ-ын өмнөөс эхэлсэн талцал хагарал улам гүнзгийрч орон нутаг дахь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Шинээр сонгогдсон гишүүдийн ХОМ-2",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "0",
    text: "АТГ-аас төрийн албан хаагчдын 2020 оны хөрөнгө орлогын мэдүүлгийн хураангуйг олон нийтэд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zz.jpg&w=700&h=480",
    title: "Олимпийн нээлт ба Л.Оюун-Эрдэнийн айлчлал",
    writer: "Д.Баасансүх",
    date: "2021/07/26",
    comments: "0",
    text: "Монгол Улсын 32 дахь Ерөнхий сайд гадаад дахь анхны айлчлалаа Их наран улсаас эхэллээ. Энэ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/terguun.jpg&w=700&h=480",
    title:
      "ТОКИО 2020: Нээлтийн ёслолд 11 улсын төр, засгийн тэргүүнүүд оролцжээ",
    writer: "Г.Очир",
    date: "2021/07/24",
    comments: "0",
    text: "Баасан гарагт Токио 2020 зуны олимпын наадам албан ёсоор нээгдсэн билээ. Нээлтийн ёслол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/terguun.jpg&w=700&h=480",
    title:
      "ТОКИО 2020: Нээлтийн ёслолд 11 улсын төр, засгийн тэргүүнүүд оролцжээ",
    writer: "Г.Очир",
    date: "2021/07/24",
    comments: "0",
    text: "Баасан гарагт Токио 2020 зуны олимпын наадам албан ёсоор нээгдсэн билээ. Нээлтийн ёслол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны дотор бүртгэнэ",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Нөхөн сонгуулийн хуанли",
    writer: "Д.Баасансүх",
    date: "2021/08/13",
    comments: "0",
    text: "Ирэх аравдугаар сард УИХ-ын 18 болон 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт болно.",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "МАН Хэнтийд Н.Энхбаатарыг нэр дэвшүүлэх магадлал өндөр байна",
    writer: "Д.Баасансүх",
    date: "2021/08/11",
    comments: "4",
    text: "Хэнтий аймаг, Сонгино Хайрхан дүүрэг буюу УИХ-ын сонгуулийн 18, 28 дугаар тойргийн нөхөн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "УИХ-ын хоёр тойрогт явагдах нөхөн сонгуульд оролцохоо илэрхийлсэн 9 нам, нэг эвсэл",
    writer: "Д.Баасансүх",
    date: "2021/08/10",
    comments: "0",
    text: "УИХ-ын 18, 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт 2021 оны аравдугаар сарын 10-нд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхийлөгч У.Хүрэлсүхийн зөвлөхүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/09",
    comments: "2",
    text: "2021 оны Ерөнхийлөгчийн сонгуульд МАН-аас нэр дэвшигч У.Хүрэлсүх үнэмлэхүй ялалт байгуулж,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/shuurhailogo%20(1)%20(6).jpg&w=700&h=480",
    title: "Сорилтоор дүүрэн Л.Оюун-Эрдэнийн өдрүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/03",
    comments: "2",
    text: "Л.Оюун-Эрдэнэ Ерөнхий сайдаар томилогдоод зургаан сар гаруй боллоо. Анх болоход нь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/30",
    comments: "0",
    text: "Ерөнхий сайд Л.Оюун-Эрдэнэ долоо хоногийн өмнө “Ковидын үед олимп үзэхээр явлаа”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Л.Оюун-Эрдэнэ: Олон үйл явдал давхацсан, өргөн цар хүрээтэй айлчлал боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/29",
    comments: "0",
    text: "Японд Улсад ажлын айлчлал хийсэн Монгол Улсын Ерөнхий сайд Л.Оюун-Эрдэнэ өнөөдөр эх орондоо",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "АН-ын хагарал орон нутаг руу “нүүсэн” үү?",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "3",
    text: "Ардчилсан намд 2020 оны УИХ-ын өмнөөс эхэлсэн талцал хагарал улам гүнзгийрч орон нутаг дахь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Шинээр сонгогдсон гишүүдийн ХОМ-2",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "0",
    text: "АТГ-аас төрийн албан хаагчдын 2020 оны хөрөнгө орлогын мэдүүлгийн хураангуйг олон нийтэд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zz.jpg&w=700&h=480",
    title: "Олимпийн нээлт ба Л.Оюун-Эрдэнийн айлчлал",
    writer: "Д.Баасансүх",
    date: "2021/07/26",
    comments: "0",
    text: "Монгол Улсын 32 дахь Ерөнхий сайд гадаад дахь анхны айлчлалаа Их наран улсаас эхэллээ. Энэ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/terguun.jpg&w=700&h=480",
    title:
      "ТОКИО 2020: Нээлтийн ёслолд 11 улсын төр, засгийн тэргүүнүүд оролцжээ",
    writer: "Г.Очир",
    date: "2021/07/24",
    comments: "0",
    text: "Баасан гарагт Токио 2020 зуны олимпын наадам албан ёсоор нээгдсэн билээ. Нээлтийн ёслол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны дотор бүртгэнэ",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Нөхөн сонгуулийн хуанли",
    writer: "Д.Баасансүх",
    date: "2021/08/13",
    comments: "0",
    text: "Ирэх аравдугаар сард УИХ-ын 18 болон 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт болно.",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "МАН Хэнтийд Н.Энхбаатарыг нэр дэвшүүлэх магадлал өндөр байна",
    writer: "Д.Баасансүх",
    date: "2021/08/11",
    comments: "4",
    text: "Хэнтий аймаг, Сонгино Хайрхан дүүрэг буюу УИХ-ын сонгуулийн 18, 28 дугаар тойргийн нөхөн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "УИХ-ын хоёр тойрогт явагдах нөхөн сонгуульд оролцохоо илэрхийлсэн 9 нам, нэг эвсэл",
    writer: "Д.Баасансүх",
    date: "2021/08/10",
    comments: "0",
    text: "УИХ-ын 18, 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт 2021 оны аравдугаар сарын 10-нд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхийлөгч У.Хүрэлсүхийн зөвлөхүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/09",
    comments: "2",
    text: "2021 оны Ерөнхийлөгчийн сонгуульд МАН-аас нэр дэвшигч У.Хүрэлсүх үнэмлэхүй ялалт байгуулж,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/shuurhailogo%20(1)%20(6).jpg&w=700&h=480",
    title: "Сорилтоор дүүрэн Л.Оюун-Эрдэнийн өдрүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/03",
    comments: "2",
    text: "Л.Оюун-Эрдэнэ Ерөнхий сайдаар томилогдоод зургаан сар гаруй боллоо. Анх болоход нь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/30",
    comments: "0",
    text: "Ерөнхий сайд Л.Оюун-Эрдэнэ долоо хоногийн өмнө “Ковидын үед олимп үзэхээр явлаа”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Л.Оюун-Эрдэнэ: Олон үйл явдал давхацсан, өргөн цар хүрээтэй айлчлал боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/29",
    comments: "0",
    text: "Японд Улсад ажлын айлчлал хийсэн Монгол Улсын Ерөнхий сайд Л.Оюун-Эрдэнэ өнөөдөр эх орондоо",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "АН-ын хагарал орон нутаг руу “нүүсэн” үү?",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "3",
    text: "Ардчилсан намд 2020 оны УИХ-ын өмнөөс эхэлсэн талцал хагарал улам гүнзгийрч орон нутаг дахь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Шинээр сонгогдсон гишүүдийн ХОМ-2",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "0",
    text: "АТГ-аас төрийн албан хаагчдын 2020 оны хөрөнгө орлогын мэдүүлгийн хураангуйг олон нийтэд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zz.jpg&w=700&h=480",
    title: "Олимпийн нээлт ба Л.Оюун-Эрдэнийн айлчлал",
    writer: "Д.Баасансүх",
    date: "2021/07/26",
    comments: "0",
    text: "Монгол Улсын 32 дахь Ерөнхий сайд гадаад дахь анхны айлчлалаа Их наран улсаас эхэллээ. Энэ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/terguun.jpg&w=700&h=480",
    title:
      "ТОКИО 2020: Нээлтийн ёслолд 11 улсын төр, засгийн тэргүүнүүд оролцжээ",
    writer: "Г.Очир",
    date: "2021/07/24",
    comments: "0",
    text: "Баасан гарагт Токио 2020 зуны олимпын наадам албан ёсоор нээгдсэн билээ. Нээлтийн ёслол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/terguun.jpg&w=700&h=480",
    title:
      "ТОКИО 2020: Нээлтийн ёслолд 11 улсын төр, засгийн тэргүүнүүд оролцжээ",
    writer: "Г.Очир",
    date: "2021/07/24",
    comments: "0",
    text: "Баасан гарагт Токио 2020 зуны олимпын наадам албан ёсоор нээгдсэн билээ. Нээлтийн ёслол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны дотор бүртгэнэ",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Нөхөн сонгуулийн хуанли",
    writer: "Д.Баасансүх",
    date: "2021/08/13",
    comments: "0",
    text: "Ирэх аравдугаар сард УИХ-ын 18 болон 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт болно.",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "МАН Хэнтийд Н.Энхбаатарыг нэр дэвшүүлэх магадлал өндөр байна",
    writer: "Д.Баасансүх",
    date: "2021/08/11",
    comments: "4",
    text: "Хэнтий аймаг, Сонгино Хайрхан дүүрэг буюу УИХ-ын сонгуулийн 18, 28 дугаар тойргийн нөхөн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "УИХ-ын хоёр тойрогт явагдах нөхөн сонгуульд оролцохоо илэрхийлсэн 9 нам, нэг эвсэл",
    writer: "Д.Баасансүх",
    date: "2021/08/10",
    comments: "0",
    text: "УИХ-ын 18, 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт 2021 оны аравдугаар сарын 10-нд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхийлөгч У.Хүрэлсүхийн зөвлөхүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/09",
    comments: "2",
    text: "2021 оны Ерөнхийлөгчийн сонгуульд МАН-аас нэр дэвшигч У.Хүрэлсүх үнэмлэхүй ялалт байгуулж,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/shuurhailogo%20(1)%20(6).jpg&w=700&h=480",
    title: "Сорилтоор дүүрэн Л.Оюун-Эрдэнийн өдрүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/03",
    comments: "2",
    text: "Л.Оюун-Эрдэнэ Ерөнхий сайдаар томилогдоод зургаан сар гаруй боллоо. Анх болоход нь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/30",
    comments: "0",
    text: "Ерөнхий сайд Л.Оюун-Эрдэнэ долоо хоногийн өмнө “Ковидын үед олимп үзэхээр явлаа”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Л.Оюун-Эрдэнэ: Олон үйл явдал давхацсан, өргөн цар хүрээтэй айлчлал боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/29",
    comments: "0",
    text: "Японд Улсад ажлын айлчлал хийсэн Монгол Улсын Ерөнхий сайд Л.Оюун-Эрдэнэ өнөөдөр эх орондоо",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "АН-ын хагарал орон нутаг руу “нүүсэн” үү?",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "3",
    text: "Ардчилсан намд 2020 оны УИХ-ын өмнөөс эхэлсэн талцал хагарал улам гүнзгийрч орон нутаг дахь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Шинээр сонгогдсон гишүүдийн ХОМ-2",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "0",
    text: "АТГ-аас төрийн албан хаагчдын 2020 оны хөрөнгө орлогын мэдүүлгийн хураангуйг олон нийтэд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zz.jpg&w=700&h=480",
    title: "Олимпийн нээлт ба Л.Оюун-Эрдэнийн айлчлал",
    writer: "Д.Баасансүх",
    date: "2021/07/26",
    comments: "0",
    text: "Монгол Улсын 32 дахь Ерөнхий сайд гадаад дахь анхны айлчлалаа Их наран улсаас эхэллээ. Энэ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/terguun.jpg&w=700&h=480",
    title:
      "ТОКИО 2020: Нээлтийн ёслолд 11 улсын төр, засгийн тэргүүнүүд оролцжээ",
    writer: "Г.Очир",
    date: "2021/07/24",
    comments: "0",
    text: "Баасан гарагт Токио 2020 зуны олимпын наадам албан ёсоор нээгдсэн билээ. Нээлтийн ёслол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны дотор бүртгэнэ",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Нөхөн сонгуулийн хуанли",
    writer: "Д.Баасансүх",
    date: "2021/08/13",
    comments: "0",
    text: "Ирэх аравдугаар сард УИХ-ын 18 болон 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт болно.",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "МАН Хэнтийд Н.Энхбаатарыг нэр дэвшүүлэх магадлал өндөр байна",
    writer: "Д.Баасансүх",
    date: "2021/08/11",
    comments: "4",
    text: "Хэнтий аймаг, Сонгино Хайрхан дүүрэг буюу УИХ-ын сонгуулийн 18, 28 дугаар тойргийн нөхөн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "УИХ-ын хоёр тойрогт явагдах нөхөн сонгуульд оролцохоо илэрхийлсэн 9 нам, нэг эвсэл",
    writer: "Д.Баасансүх",
    date: "2021/08/10",
    comments: "0",
    text: "УИХ-ын 18, 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт 2021 оны аравдугаар сарын 10-нд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхийлөгч У.Хүрэлсүхийн зөвлөхүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/09",
    comments: "2",
    text: "2021 оны Ерөнхийлөгчийн сонгуульд МАН-аас нэр дэвшигч У.Хүрэлсүх үнэмлэхүй ялалт байгуулж,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/shuurhailogo%20(1)%20(6).jpg&w=700&h=480",
    title: "Сорилтоор дүүрэн Л.Оюун-Эрдэнийн өдрүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/03",
    comments: "2",
    text: "Л.Оюун-Эрдэнэ Ерөнхий сайдаар томилогдоод зургаан сар гаруй боллоо. Анх болоход нь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/30",
    comments: "0",
    text: "Ерөнхий сайд Л.Оюун-Эрдэнэ долоо хоногийн өмнө “Ковидын үед олимп үзэхээр явлаа”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Л.Оюун-Эрдэнэ: Олон үйл явдал давхацсан, өргөн цар хүрээтэй айлчлал боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/29",
    comments: "0",
    text: "Японд Улсад ажлын айлчлал хийсэн Монгол Улсын Ерөнхий сайд Л.Оюун-Эрдэнэ өнөөдөр эх орондоо",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "АН-ын хагарал орон нутаг руу “нүүсэн” үү?",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "3",
    text: "Ардчилсан намд 2020 оны УИХ-ын өмнөөс эхэлсэн талцал хагарал улам гүнзгийрч орон нутаг дахь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Шинээр сонгогдсон гишүүдийн ХОМ-2",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "0",
    text: "АТГ-аас төрийн албан хаагчдын 2020 оны хөрөнгө орлогын мэдүүлгийн хураангуйг олон нийтэд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zz.jpg&w=700&h=480",
    title: "Олимпийн нээлт ба Л.Оюун-Эрдэнийн айлчлал",
    writer: "Д.Баасансүх",
    date: "2021/07/26",
    comments: "0",
    text: "Монгол Улсын 32 дахь Ерөнхий сайд гадаад дахь анхны айлчлалаа Их наран улсаас эхэллээ. Энэ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/terguun.jpg&w=700&h=480",
    title:
      "ТОКИО 2020: Нээлтийн ёслолд 11 улсын төр, засгийн тэргүүнүүд оролцжээ",
    writer: "Г.Очир",
    date: "2021/07/24",
    comments: "0",
    text: "Баасан гарагт Токио 2020 зуны олимпын наадам албан ёсоор нээгдсэн билээ. Нээлтийн ёслол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/terguun.jpg&w=700&h=480",
    title:
      "ТОКИО 2020: Нээлтийн ёслолд 11 улсын төр, засгийн тэргүүнүүд оролцжээ",
    writer: "Г.Очир",
    date: "2021/07/24",
    comments: "0",
    text: "Баасан гарагт Токио 2020 зуны олимпын наадам албан ёсоор нээгдсэн билээ. Нээлтийн ёслол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны дотор бүртгэнэ",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Нөхөн сонгуулийн хуанли",
    writer: "Д.Баасансүх",
    date: "2021/08/13",
    comments: "0",
    text: "Ирэх аравдугаар сард УИХ-ын 18 болон 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт болно.",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "МАН Хэнтийд Н.Энхбаатарыг нэр дэвшүүлэх магадлал өндөр байна",
    writer: "Д.Баасансүх",
    date: "2021/08/11",
    comments: "4",
    text: "Хэнтий аймаг, Сонгино Хайрхан дүүрэг буюу УИХ-ын сонгуулийн 18, 28 дугаар тойргийн нөхөн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "УИХ-ын хоёр тойрогт явагдах нөхөн сонгуульд оролцохоо илэрхийлсэн 9 нам, нэг эвсэл",
    writer: "Д.Баасансүх",
    date: "2021/08/10",
    comments: "0",
    text: "УИХ-ын 18, 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт 2021 оны аравдугаар сарын 10-нд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхийлөгч У.Хүрэлсүхийн зөвлөхүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/09",
    comments: "2",
    text: "2021 оны Ерөнхийлөгчийн сонгуульд МАН-аас нэр дэвшигч У.Хүрэлсүх үнэмлэхүй ялалт байгуулж,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/shuurhailogo%20(1)%20(6).jpg&w=700&h=480",
    title: "Сорилтоор дүүрэн Л.Оюун-Эрдэнийн өдрүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/03",
    comments: "2",
    text: "Л.Оюун-Эрдэнэ Ерөнхий сайдаар томилогдоод зургаан сар гаруй боллоо. Анх болоход нь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/30",
    comments: "0",
    text: "Ерөнхий сайд Л.Оюун-Эрдэнэ долоо хоногийн өмнө “Ковидын үед олимп үзэхээр явлаа”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Л.Оюун-Эрдэнэ: Олон үйл явдал давхацсан, өргөн цар хүрээтэй айлчлал боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/29",
    comments: "0",
    text: "Японд Улсад ажлын айлчлал хийсэн Монгол Улсын Ерөнхий сайд Л.Оюун-Эрдэнэ өнөөдөр эх орондоо",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "АН-ын хагарал орон нутаг руу “нүүсэн” үү?",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "3",
    text: "Ардчилсан намд 2020 оны УИХ-ын өмнөөс эхэлсэн талцал хагарал улам гүнзгийрч орон нутаг дахь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Шинээр сонгогдсон гишүүдийн ХОМ-2",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "0",
    text: "АТГ-аас төрийн албан хаагчдын 2020 оны хөрөнгө орлогын мэдүүлгийн хураангуйг олон нийтэд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zz.jpg&w=700&h=480",
    title: "Олимпийн нээлт ба Л.Оюун-Эрдэнийн айлчлал",
    writer: "Д.Баасансүх",
    date: "2021/07/26",
    comments: "0",
    text: "Монгол Улсын 32 дахь Ерөнхий сайд гадаад дахь анхны айлчлалаа Их наран улсаас эхэллээ. Энэ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/terguun.jpg&w=700&h=480",
    title:
      "ТОКИО 2020: Нээлтийн ёслолд 11 улсын төр, засгийн тэргүүнүүд оролцжээ",
    writer: "Г.Очир",
    date: "2021/07/24",
    comments: "0",
    text: "Баасан гарагт Токио 2020 зуны олимпын наадам албан ёсоор нээгдсэн билээ. Нээлтийн ёслол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны дотор бүртгэнэ",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Нөхөн сонгуулийн хуанли",
    writer: "Д.Баасансүх",
    date: "2021/08/13",
    comments: "0",
    text: "Ирэх аравдугаар сард УИХ-ын 18 болон 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт болно.",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "МАН Хэнтийд Н.Энхбаатарыг нэр дэвшүүлэх магадлал өндөр байна",
    writer: "Д.Баасансүх",
    date: "2021/08/11",
    comments: "4",
    text: "Хэнтий аймаг, Сонгино Хайрхан дүүрэг буюу УИХ-ын сонгуулийн 18, 28 дугаар тойргийн нөхөн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "УИХ-ын хоёр тойрогт явагдах нөхөн сонгуульд оролцохоо илэрхийлсэн 9 нам, нэг эвсэл",
    writer: "Д.Баасансүх",
    date: "2021/08/10",
    comments: "0",
    text: "УИХ-ын 18, 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт 2021 оны аравдугаар сарын 10-нд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхийлөгч У.Хүрэлсүхийн зөвлөхүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/09",
    comments: "2",
    text: "2021 оны Ерөнхийлөгчийн сонгуульд МАН-аас нэр дэвшигч У.Хүрэлсүх үнэмлэхүй ялалт байгуулж,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/shuurhailogo%20(1)%20(6).jpg&w=700&h=480",
    title: "Сорилтоор дүүрэн Л.Оюун-Эрдэнийн өдрүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/03",
    comments: "2",
    text: "Л.Оюун-Эрдэнэ Ерөнхий сайдаар томилогдоод зургаан сар гаруй боллоо. Анх болоход нь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/30",
    comments: "0",
    text: "Ерөнхий сайд Л.Оюун-Эрдэнэ долоо хоногийн өмнө “Ковидын үед олимп үзэхээр явлаа”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Л.Оюун-Эрдэнэ: Олон үйл явдал давхацсан, өргөн цар хүрээтэй айлчлал боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/29",
    comments: "0",
    text: "Японд Улсад ажлын айлчлал хийсэн Монгол Улсын Ерөнхий сайд Л.Оюун-Эрдэнэ өнөөдөр эх орондоо",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "АН-ын хагарал орон нутаг руу “нүүсэн” үү?",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "3",
    text: "Ардчилсан намд 2020 оны УИХ-ын өмнөөс эхэлсэн талцал хагарал улам гүнзгийрч орон нутаг дахь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Шинээр сонгогдсон гишүүдийн ХОМ-2",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "0",
    text: "АТГ-аас төрийн албан хаагчдын 2020 оны хөрөнгө орлогын мэдүүлгийн хураангуйг олон нийтэд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zz.jpg&w=700&h=480",
    title: "Олимпийн нээлт ба Л.Оюун-Эрдэнийн айлчлал",
    writer: "Д.Баасансүх",
    date: "2021/07/26",
    comments: "0",
    text: "Монгол Улсын 32 дахь Ерөнхий сайд гадаад дахь анхны айлчлалаа Их наран улсаас эхэллээ. Энэ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/terguun.jpg&w=700&h=480",
    title:
      "ТОКИО 2020: Нээлтийн ёслолд 11 улсын төр, засгийн тэргүүнүүд оролцжээ",
    writer: "Г.Очир",
    date: "2021/07/24",
    comments: "0",
    text: "Баасан гарагт Токио 2020 зуны олимпын наадам албан ёсоор нээгдсэн билээ. Нээлтийн ёслол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/terguun.jpg&w=700&h=480",
    title:
      "ТОКИО 2020: Нээлтийн ёслолд 11 улсын төр, засгийн тэргүүнүүд оролцжээ",
    writer: "Г.Очир",
    date: "2021/07/24",
    comments: "0",
    text: "Баасан гарагт Токио 2020 зуны олимпын наадам албан ёсоор нээгдсэн билээ. Нээлтийн ёслол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны дотор бүртгэнэ",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Нөхөн сонгуулийн хуанли",
    writer: "Д.Баасансүх",
    date: "2021/08/13",
    comments: "0",
    text: "Ирэх аравдугаар сард УИХ-ын 18 болон 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт болно.",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "МАН Хэнтийд Н.Энхбаатарыг нэр дэвшүүлэх магадлал өндөр байна",
    writer: "Д.Баасансүх",
    date: "2021/08/11",
    comments: "4",
    text: "Хэнтий аймаг, Сонгино Хайрхан дүүрэг буюу УИХ-ын сонгуулийн 18, 28 дугаар тойргийн нөхөн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "УИХ-ын хоёр тойрогт явагдах нөхөн сонгуульд оролцохоо илэрхийлсэн 9 нам, нэг эвсэл",
    writer: "Д.Баасансүх",
    date: "2021/08/10",
    comments: "0",
    text: "УИХ-ын 18, 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт 2021 оны аравдугаар сарын 10-нд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхийлөгч У.Хүрэлсүхийн зөвлөхүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/09",
    comments: "2",
    text: "2021 оны Ерөнхийлөгчийн сонгуульд МАН-аас нэр дэвшигч У.Хүрэлсүх үнэмлэхүй ялалт байгуулж,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/shuurhailogo%20(1)%20(6).jpg&w=700&h=480",
    title: "Сорилтоор дүүрэн Л.Оюун-Эрдэнийн өдрүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/03",
    comments: "2",
    text: "Л.Оюун-Эрдэнэ Ерөнхий сайдаар томилогдоод зургаан сар гаруй боллоо. Анх болоход нь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/30",
    comments: "0",
    text: "Ерөнхий сайд Л.Оюун-Эрдэнэ долоо хоногийн өмнө “Ковидын үед олимп үзэхээр явлаа”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Л.Оюун-Эрдэнэ: Олон үйл явдал давхацсан, өргөн цар хүрээтэй айлчлал боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/29",
    comments: "0",
    text: "Японд Улсад ажлын айлчлал хийсэн Монгол Улсын Ерөнхий сайд Л.Оюун-Эрдэнэ өнөөдөр эх орондоо",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "АН-ын хагарал орон нутаг руу “нүүсэн” үү?",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "3",
    text: "Ардчилсан намд 2020 оны УИХ-ын өмнөөс эхэлсэн талцал хагарал улам гүнзгийрч орон нутаг дахь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Шинээр сонгогдсон гишүүдийн ХОМ-2",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "0",
    text: "АТГ-аас төрийн албан хаагчдын 2020 оны хөрөнгө орлогын мэдүүлгийн хураангуйг олон нийтэд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zz.jpg&w=700&h=480",
    title: "Олимпийн нээлт ба Л.Оюун-Эрдэнийн айлчлал",
    writer: "Д.Баасансүх",
    date: "2021/07/26",
    comments: "0",
    text: "Монгол Улсын 32 дахь Ерөнхий сайд гадаад дахь анхны айлчлалаа Их наран улсаас эхэллээ. Энэ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/terguun.jpg&w=700&h=480",
    title:
      "ТОКИО 2020: Нээлтийн ёслолд 11 улсын төр, засгийн тэргүүнүүд оролцжээ",
    writer: "Г.Очир",
    date: "2021/07/24",
    comments: "0",
    text: "Баасан гарагт Токио 2020 зуны олимпын наадам албан ёсоор нээгдсэн билээ. Нээлтийн ёслол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны дотор бүртгэнэ",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Нөхөн сонгуулийн хуанли",
    writer: "Д.Баасансүх",
    date: "2021/08/13",
    comments: "0",
    text: "Ирэх аравдугаар сард УИХ-ын 18 болон 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт болно.",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "МАН Хэнтийд Н.Энхбаатарыг нэр дэвшүүлэх магадлал өндөр байна",
    writer: "Д.Баасансүх",
    date: "2021/08/11",
    comments: "4",
    text: "Хэнтий аймаг, Сонгино Хайрхан дүүрэг буюу УИХ-ын сонгуулийн 18, 28 дугаар тойргийн нөхөн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "УИХ-ын хоёр тойрогт явагдах нөхөн сонгуульд оролцохоо илэрхийлсэн 9 нам, нэг эвсэл",
    writer: "Д.Баасансүх",
    date: "2021/08/10",
    comments: "0",
    text: "УИХ-ын 18, 28 дугаар тойрогт нөхөн сонгуулийн санал хураалт 2021 оны аравдугаар сарын 10-нд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхийлөгч У.Хүрэлсүхийн зөвлөхүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/09",
    comments: "2",
    text: "2021 оны Ерөнхийлөгчийн сонгуульд МАН-аас нэр дэвшигч У.Хүрэлсүх үнэмлэхүй ялалт байгуулж,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/shuurhailogo%20(1)%20(6).jpg&w=700&h=480",
    title: "Сорилтоор дүүрэн Л.Оюун-Эрдэнийн өдрүүд",
    writer: "Д.Баасансүх",
    date: "2021/08/03",
    comments: "2",
    text: "Л.Оюун-Эрдэнэ Ерөнхий сайдаар томилогдоод зургаан сар гаруй боллоо. Анх болоход нь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/30",
    comments: "0",
    text: "Ерөнхий сайд Л.Оюун-Эрдэнэ долоо хоногийн өмнө “Ковидын үед олимп үзэхээр явлаа”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Л.Оюун-Эрдэнэ: Олон үйл явдал давхацсан, өргөн цар хүрээтэй айлчлал боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/29",
    comments: "0",
    text: "Японд Улсад ажлын айлчлал хийсэн Монгол Улсын Ерөнхий сайд Л.Оюун-Эрдэнэ өнөөдөр эх орондоо",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "АН-ын хагарал орон нутаг руу “нүүсэн” үү?",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "3",
    text: "Ардчилсан намд 2020 оны УИХ-ын өмнөөс эхэлсэн талцал хагарал улам гүнзгийрч орон нутаг дахь",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Шинээр сонгогдсон гишүүдийн ХОМ-2",
    writer: "Д.Баасансүх",
    date: "2021/07/28",
    comments: "0",
    text: "АТГ-аас төрийн албан хаагчдын 2020 оны хөрөнгө орлогын мэдүүлгийн хураангуйг олон нийтэд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zz.jpg&w=700&h=480",
    title: "Олимпийн нээлт ба Л.Оюун-Эрдэнийн айлчлал",
    writer: "Д.Баасансүх",
    date: "2021/07/26",
    comments: "0",
    text: "Монгол Улсын 32 дахь Ерөнхий сайд гадаад дахь анхны айлчлалаа Их наран улсаас эхэллээ. Энэ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/terguun.jpg&w=700&h=480",
    title:
      "ТОКИО 2020: Нээлтийн ёслолд 11 улсын төр, засгийн тэргүүнүүд оролцжээ",
    writer: "Г.Очир",
    date: "2021/07/24",
    comments: "0",
    text: "Баасан гарагт Токио 2020 зуны олимпын наадам албан ёсоор нээгдсэн билээ. Нээлтийн ёслол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/terguun.jpg&w=700&h=480",
    title:
      "ТОКИО 2020: Нээлтийн ёслолд 11 улсын төр, засгийн тэргүүнүүд оролцжээ",
    writer: "Г.Очир",
    date: "2021/07/24",
    comments: "0",
    text: "Баасан гарагт Токио 2020 зуны олимпын наадам албан ёсоор нээгдсэн билээ. Нээлтийн ёслол",
  },
];

const economy = [
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Гадаад арилжаанд хөл тавих эхний алхмууд",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Алдарт хөрөнгө оруулагч Уорен Баффетын хэлсэнчлэн та хөрөнгийн зах зээл дээр хөл тавьж байгаа",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Хөрөнгийн зах зээлийн топ 5 компанийн өчигдөр, өнөөдөр",
    writer: "Д.Баасансүх",
    date: "2021/08/18",
    comments: "0",
    text: "Монголын Хөрөнгийн Бирж энэ оны эхний зургаан сарын байдлаар 1.5 тэрбум төгрөгийн ашигтай",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/shuurhailogo%20(1)%20(3).jpg&w=700&h=480",
    title:
      "Б.Жавхлан: Эдийн засаг сэргэж байгаа ч нүүрсний экспорт багассанаар төсөвт эрсдэл учирч болзошгүй",
    writer: "Д.Баасансүх",
    date: "2021/07/20",
    comments: "0",
    text: "Засгийн газрын өнөөдрийн ээлжит бус хуралдаанаар, Эрүүл мэндээ хамгаалж эдийн засгаа сэргээх 10",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/baajiii.jpg&w=700&h=480",
    title:
      "Б.Бат-Эрдэнэ: Шатахуун импортлогч, үйлдвэрлэгч 26 компанид торгуулийн арга хэмжээ авна",
    writer: "Г.Очир",
    date: "2021/07/17",
    comments: "3",
    text: "Шатахуун импортлогчид энэ сарын 8-ны өдөр литр шатахууны үнийг 300 төгрөгөөр нэмсэн. Жишээлбэл,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zah.jpg&w=700&h=480",
    title: "Зах худалдааны төвүүдийн ажиллах хуваарь",
    writer: "Г.Очир",
    date: "2021/07/16",
    comments: "0",
    text: "Үндэсний их баяр наадмын амралтын өдрүүд үргэлжилж байна. Долдугаар сарын 10-18-нд буюу нийт,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/10mynga.jpg&w=700&h=480",
    title: "Ардын хувьсгалын 100 жилийн ойн дурсгалын 10.000-ын дэвсгэрт",
    writer: "Г.Очир",
    date: "2021/07/10",
    comments: "",
    text: "Монголбанк Ардын хувьсгалын 100 жилийн ойд зориулан гүйлгээнд хүчин төгөлдөр дурсгалын 10000",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Tow_bair%20(1).JPG&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/09",
    comments: "0",
    text: "Банкны тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийн төслийг 2021 оны 01 дүгээр сарын",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/download-2.jpg&w=700&h=480",
    title:
      "ТАНИЛЦ: Хүүхдийн мөнгө, тэтгэвэр, тэтгэмжийг дараах өдрүүдэд олгох ХУВААРЬ",
    writer: "Г.Очир",
    date: "2021/07/09",
    comments: "1",
    text: "Хөдөлмөр, халамжийн үйлчилгээний ерөнхий газраас 2021 оны долдугаар сарын нийгмийн халамжийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/mongo.jpg&w=700&h=480",
    title: "УЕПГ: Мөнгө угаах гэмт хэрэг 7 хувиар өсчээ",
    writer: "Г.Очир",
    date: "2021/07/08",
    comments: "0",
    text: "Прокурорын байгууллагаас он гарснаар Эрүүгийн хуульд заасан мөнгө угаах 245 гэмт хэрэгт",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Бизнес эрхлэгч эмэгтэйчүүдэд зориулсан “Дижитал шилжилт” сургалтыг зохион байгууллаа",
    writer: "Д.Баасансүх",
    date: "2021/07/08",
    comments: "0",
    text: "Голомт банк болон Бизнес эрхлэгч Эмэгтэйчүүдийн Ментор Клуб хамтран “Бизнес эрхлэгч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Blue%20Photo%20Vintage%20Sympathy%20Card%20(58).jpg&w=700&h=480",
    title:
      "20,000 орчим аав 0-3 насны хүүхдээ асарч байгаа тэтгэмжид хамрагдахаар боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/07",
    comments: "0",
    text: "УИХ-аас эх, олон хүүхэдтэй өрх толгойлсон эх, эцэгт тэтгэмж олгох тухай хуулийг баталж",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Хөрөнгийн зах зээлийн топ 5 компанийн өчигдөр, өнөөдөр",
    writer: "Д.Баасансүх",
    date: "2021/08/18",
    comments: "0",
    text: "Монголын Хөрөнгийн Бирж энэ оны эхний зургаан сарын байдлаар 1.5 тэрбум төгрөгийн ашигтай",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/shuurhailogo%20(1)%20(3).jpg&w=700&h=480",
    title:
      "Б.Жавхлан: Эдийн засаг сэргэж байгаа ч нүүрсний экспорт багассанаар төсөвт эрсдэл учирч болзошгүй",
    writer: "Д.Баасансүх",
    date: "2021/07/20",
    comments: "0",
    text: "Засгийн газрын өнөөдрийн ээлжит бус хуралдаанаар, Эрүүл мэндээ хамгаалж эдийн засгаа сэргээх 10",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/baajiii.jpg&w=700&h=480",
    title:
      "Б.Бат-Эрдэнэ: Шатахуун импортлогч, үйлдвэрлэгч 26 компанид торгуулийн арга хэмжээ авна",
    writer: "Г.Очир",
    date: "2021/07/17",
    comments: "3",
    text: "Шатахуун импортлогчид энэ сарын 8-ны өдөр литр шатахууны үнийг 300 төгрөгөөр нэмсэн. Жишээлбэл,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zah.jpg&w=700&h=480",
    title: "Зах худалдааны төвүүдийн ажиллах хуваарь",
    writer: "Г.Очир",
    date: "2021/07/16",
    comments: "0",
    text: "Үндэсний их баяр наадмын амралтын өдрүүд үргэлжилж байна. Долдугаар сарын 10-18-нд буюу нийт,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/10mynga.jpg&w=700&h=480",
    title: "Ардын хувьсгалын 100 жилийн ойн дурсгалын 10.000-ын дэвсгэрт",
    writer: "Г.Очир",
    date: "2021/07/10",
    comments: "",
    text: "Монголбанк Ардын хувьсгалын 100 жилийн ойд зориулан гүйлгээнд хүчин төгөлдөр дурсгалын 10000",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Tow_bair%20(1).JPG&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/09",
    comments: "0",
    text: "Банкны тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийн төслийг 2021 оны 01 дүгээр сарын",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/download-2.jpg&w=700&h=480",
    title:
      "ТАНИЛЦ: Хүүхдийн мөнгө, тэтгэвэр, тэтгэмжийг дараах өдрүүдэд олгох ХУВААРЬ",
    writer: "Г.Очир",
    date: "2021/07/09",
    comments: "1",
    text: "Хөдөлмөр, халамжийн үйлчилгээний ерөнхий газраас 2021 оны долдугаар сарын нийгмийн халамжийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/mongo.jpg&w=700&h=480",
    title: "УЕПГ: Мөнгө угаах гэмт хэрэг 7 хувиар өсчээ",
    writer: "Г.Очир",
    date: "2021/07/08",
    comments: "0",
    text: "Прокурорын байгууллагаас он гарснаар Эрүүгийн хуульд заасан мөнгө угаах 245 гэмт хэрэгт",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Бизнес эрхлэгч эмэгтэйчүүдэд зориулсан “Дижитал шилжилт” сургалтыг зохион байгууллаа",
    writer: "Д.Баасансүх",
    date: "2021/07/08",
    comments: "0",
    text: "Голомт банк болон Бизнес эрхлэгч Эмэгтэйчүүдийн Ментор Клуб хамтран “Бизнес эрхлэгч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Blue%20Photo%20Vintage%20Sympathy%20Card%20(58).jpg&w=700&h=480",
    title:
      "20,000 орчим аав 0-3 насны хүүхдээ асарч байгаа тэтгэмжид хамрагдахаар боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/07",
    comments: "0",
    text: "УИХ-аас эх, олон хүүхэдтэй өрх толгойлсон эх, эцэгт тэтгэмж олгох тухай хуулийг баталж",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Хөрөнгийн зах зээлийн топ 5 компанийн өчигдөр, өнөөдөр",
    writer: "Д.Баасансүх",
    date: "2021/08/18",
    comments: "0",
    text: "Монголын Хөрөнгийн Бирж энэ оны эхний зургаан сарын байдлаар 1.5 тэрбум төгрөгийн ашигтай",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/shuurhailogo%20(1)%20(3).jpg&w=700&h=480",
    title:
      "Б.Жавхлан: Эдийн засаг сэргэж байгаа ч нүүрсний экспорт багассанаар төсөвт эрсдэл учирч болзошгүй",
    writer: "Д.Баасансүх",
    date: "2021/07/20",
    comments: "0",
    text: "Засгийн газрын өнөөдрийн ээлжит бус хуралдаанаар, Эрүүл мэндээ хамгаалж эдийн засгаа сэргээх 10",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/baajiii.jpg&w=700&h=480",
    title:
      "Б.Бат-Эрдэнэ: Шатахуун импортлогч, үйлдвэрлэгч 26 компанид торгуулийн арга хэмжээ авна",
    writer: "Г.Очир",
    date: "2021/07/17",
    comments: "3",
    text: "Шатахуун импортлогчид энэ сарын 8-ны өдөр литр шатахууны үнийг 300 төгрөгөөр нэмсэн. Жишээлбэл,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zah.jpg&w=700&h=480",
    title: "Зах худалдааны төвүүдийн ажиллах хуваарь",
    writer: "Г.Очир",
    date: "2021/07/16",
    comments: "0",
    text: "Үндэсний их баяр наадмын амралтын өдрүүд үргэлжилж байна. Долдугаар сарын 10-18-нд буюу нийт,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/10mynga.jpg&w=700&h=480",
    title: "Ардын хувьсгалын 100 жилийн ойн дурсгалын 10.000-ын дэвсгэрт",
    writer: "Г.Очир",
    date: "2021/07/10",
    comments: "",
    text: "Монголбанк Ардын хувьсгалын 100 жилийн ойд зориулан гүйлгээнд хүчин төгөлдөр дурсгалын 10000",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Tow_bair%20(1).JPG&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/09",
    comments: "0",
    text: "Банкны тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийн төслийг 2021 оны 01 дүгээр сарын",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/download-2.jpg&w=700&h=480",
    title:
      "ТАНИЛЦ: Хүүхдийн мөнгө, тэтгэвэр, тэтгэмжийг дараах өдрүүдэд олгох ХУВААРЬ",
    writer: "Г.Очир",
    date: "2021/07/09",
    comments: "1",
    text: "Хөдөлмөр, халамжийн үйлчилгээний ерөнхий газраас 2021 оны долдугаар сарын нийгмийн халамжийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/mongo.jpg&w=700&h=480",
    title: "УЕПГ: Мөнгө угаах гэмт хэрэг 7 хувиар өсчээ",
    writer: "Г.Очир",
    date: "2021/07/08",
    comments: "0",
    text: "Прокурорын байгууллагаас он гарснаар Эрүүгийн хуульд заасан мөнгө угаах 245 гэмт хэрэгт",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Бизнес эрхлэгч эмэгтэйчүүдэд зориулсан “Дижитал шилжилт” сургалтыг зохион байгууллаа",
    writer: "Д.Баасансүх",
    date: "2021/07/08",
    comments: "0",
    text: "Голомт банк болон Бизнес эрхлэгч Эмэгтэйчүүдийн Ментор Клуб хамтран “Бизнес эрхлэгч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Blue%20Photo%20Vintage%20Sympathy%20Card%20(58).jpg&w=700&h=480",
    title:
      "20,000 орчим аав 0-3 насны хүүхдээ асарч байгаа тэтгэмжид хамрагдахаар боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/07",
    comments: "0",
    text: "УИХ-аас эх, олон хүүхэдтэй өрх толгойлсон эх, эцэгт тэтгэмж олгох тухай хуулийг баталж",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Хөрөнгийн зах зээлийн топ 5 компанийн өчигдөр, өнөөдөр",
    writer: "Д.Баасансүх",
    date: "2021/08/18",
    comments: "0",
    text: "Монголын Хөрөнгийн Бирж энэ оны эхний зургаан сарын байдлаар 1.5 тэрбум төгрөгийн ашигтай",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/shuurhailogo%20(1)%20(3).jpg&w=700&h=480",
    title:
      "Б.Жавхлан: Эдийн засаг сэргэж байгаа ч нүүрсний экспорт багассанаар төсөвт эрсдэл учирч болзошгүй",
    writer: "Д.Баасансүх",
    date: "2021/07/20",
    comments: "0",
    text: "Засгийн газрын өнөөдрийн ээлжит бус хуралдаанаар, Эрүүл мэндээ хамгаалж эдийн засгаа сэргээх 10",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/baajiii.jpg&w=700&h=480",
    title:
      "Б.Бат-Эрдэнэ: Шатахуун импортлогч, үйлдвэрлэгч 26 компанид торгуулийн арга хэмжээ авна",
    writer: "Г.Очир",
    date: "2021/07/17",
    comments: "3",
    text: "Шатахуун импортлогчид энэ сарын 8-ны өдөр литр шатахууны үнийг 300 төгрөгөөр нэмсэн. Жишээлбэл,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zah.jpg&w=700&h=480",
    title: "Зах худалдааны төвүүдийн ажиллах хуваарь",
    writer: "Г.Очир",
    date: "2021/07/16",
    comments: "0",
    text: "Үндэсний их баяр наадмын амралтын өдрүүд үргэлжилж байна. Долдугаар сарын 10-18-нд буюу нийт,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/10mynga.jpg&w=700&h=480",
    title: "Ардын хувьсгалын 100 жилийн ойн дурсгалын 10.000-ын дэвсгэрт",
    writer: "Г.Очир",
    date: "2021/07/10",
    comments: "",
    text: "Монголбанк Ардын хувьсгалын 100 жилийн ойд зориулан гүйлгээнд хүчин төгөлдөр дурсгалын 10000",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Tow_bair%20(1).JPG&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/09",
    comments: "0",
    text: "Банкны тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийн төслийг 2021 оны 01 дүгээр сарын",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/download-2.jpg&w=700&h=480",
    title:
      "ТАНИЛЦ: Хүүхдийн мөнгө, тэтгэвэр, тэтгэмжийг дараах өдрүүдэд олгох ХУВААРЬ",
    writer: "Г.Очир",
    date: "2021/07/09",
    comments: "1",
    text: "Хөдөлмөр, халамжийн үйлчилгээний ерөнхий газраас 2021 оны долдугаар сарын нийгмийн халамжийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/mongo.jpg&w=700&h=480",
    title: "УЕПГ: Мөнгө угаах гэмт хэрэг 7 хувиар өсчээ",
    writer: "Г.Очир",
    date: "2021/07/08",
    comments: "0",
    text: "Прокурорын байгууллагаас он гарснаар Эрүүгийн хуульд заасан мөнгө угаах 245 гэмт хэрэгт",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Бизнес эрхлэгч эмэгтэйчүүдэд зориулсан “Дижитал шилжилт” сургалтыг зохион байгууллаа",
    writer: "Д.Баасансүх",
    date: "2021/07/08",
    comments: "0",
    text: "Голомт банк болон Бизнес эрхлэгч Эмэгтэйчүүдийн Ментор Клуб хамтран “Бизнес эрхлэгч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Blue%20Photo%20Vintage%20Sympathy%20Card%20(58).jpg&w=700&h=480",
    title:
      "20,000 орчим аав 0-3 насны хүүхдээ асарч байгаа тэтгэмжид хамрагдахаар боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/07",
    comments: "0",
    text: "УИХ-аас эх, олон хүүхэдтэй өрх толгойлсон эх, эцэгт тэтгэмж олгох тухай хуулийг баталж",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Хөрөнгийн зах зээлийн топ 5 компанийн өчигдөр, өнөөдөр",
    writer: "Д.Баасансүх",
    date: "2021/08/18",
    comments: "0",
    text: "Монголын Хөрөнгийн Бирж энэ оны эхний зургаан сарын байдлаар 1.5 тэрбум төгрөгийн ашигтай",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/shuurhailogo%20(1)%20(3).jpg&w=700&h=480",
    title:
      "Б.Жавхлан: Эдийн засаг сэргэж байгаа ч нүүрсний экспорт багассанаар төсөвт эрсдэл учирч болзошгүй",
    writer: "Д.Баасансүх",
    date: "2021/07/20",
    comments: "0",
    text: "Засгийн газрын өнөөдрийн ээлжит бус хуралдаанаар, Эрүүл мэндээ хамгаалж эдийн засгаа сэргээх 10",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/baajiii.jpg&w=700&h=480",
    title:
      "Б.Бат-Эрдэнэ: Шатахуун импортлогч, үйлдвэрлэгч 26 компанид торгуулийн арга хэмжээ авна",
    writer: "Г.Очир",
    date: "2021/07/17",
    comments: "3",
    text: "Шатахуун импортлогчид энэ сарын 8-ны өдөр литр шатахууны үнийг 300 төгрөгөөр нэмсэн. Жишээлбэл,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zah.jpg&w=700&h=480",
    title: "Зах худалдааны төвүүдийн ажиллах хуваарь",
    writer: "Г.Очир",
    date: "2021/07/16",
    comments: "0",
    text: "Үндэсний их баяр наадмын амралтын өдрүүд үргэлжилж байна. Долдугаар сарын 10-18-нд буюу нийт,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/10mynga.jpg&w=700&h=480",
    title: "Ардын хувьсгалын 100 жилийн ойн дурсгалын 10.000-ын дэвсгэрт",
    writer: "Г.Очир",
    date: "2021/07/10",
    comments: "",
    text: "Монголбанк Ардын хувьсгалын 100 жилийн ойд зориулан гүйлгээнд хүчин төгөлдөр дурсгалын 10000",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Tow_bair%20(1).JPG&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/09",
    comments: "0",
    text: "Банкны тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийн төслийг 2021 оны 01 дүгээр сарын",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/download-2.jpg&w=700&h=480",
    title:
      "ТАНИЛЦ: Хүүхдийн мөнгө, тэтгэвэр, тэтгэмжийг дараах өдрүүдэд олгох ХУВААРЬ",
    writer: "Г.Очир",
    date: "2021/07/09",
    comments: "1",
    text: "Хөдөлмөр, халамжийн үйлчилгээний ерөнхий газраас 2021 оны долдугаар сарын нийгмийн халамжийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/mongo.jpg&w=700&h=480",
    title: "УЕПГ: Мөнгө угаах гэмт хэрэг 7 хувиар өсчээ",
    writer: "Г.Очир",
    date: "2021/07/08",
    comments: "0",
    text: "Прокурорын байгууллагаас он гарснаар Эрүүгийн хуульд заасан мөнгө угаах 245 гэмт хэрэгт",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Бизнес эрхлэгч эмэгтэйчүүдэд зориулсан “Дижитал шилжилт” сургалтыг зохион байгууллаа",
    writer: "Д.Баасансүх",
    date: "2021/07/08",
    comments: "0",
    text: "Голомт банк болон Бизнес эрхлэгч Эмэгтэйчүүдийн Ментор Клуб хамтран “Бизнес эрхлэгч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Blue%20Photo%20Vintage%20Sympathy%20Card%20(58).jpg&w=700&h=480",
    title:
      "20,000 орчим аав 0-3 насны хүүхдээ асарч байгаа тэтгэмжид хамрагдахаар боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/07",
    comments: "0",
    text: "УИХ-аас эх, олон хүүхэдтэй өрх толгойлсон эх, эцэгт тэтгэмж олгох тухай хуулийг баталж",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Хөрөнгийн зах зээлийн топ 5 компанийн өчигдөр, өнөөдөр",
    writer: "Д.Баасансүх",
    date: "2021/08/18",
    comments: "0",
    text: "Монголын Хөрөнгийн Бирж энэ оны эхний зургаан сарын байдлаар 1.5 тэрбум төгрөгийн ашигтай",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/shuurhailogo%20(1)%20(3).jpg&w=700&h=480",
    title:
      "Б.Жавхлан: Эдийн засаг сэргэж байгаа ч нүүрсний экспорт багассанаар төсөвт эрсдэл учирч болзошгүй",
    writer: "Д.Баасансүх",
    date: "2021/07/20",
    comments: "0",
    text: "Засгийн газрын өнөөдрийн ээлжит бус хуралдаанаар, Эрүүл мэндээ хамгаалж эдийн засгаа сэргээх 10",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/baajiii.jpg&w=700&h=480",
    title:
      "Б.Бат-Эрдэнэ: Шатахуун импортлогч, үйлдвэрлэгч 26 компанид торгуулийн арга хэмжээ авна",
    writer: "Г.Очир",
    date: "2021/07/17",
    comments: "3",
    text: "Шатахуун импортлогчид энэ сарын 8-ны өдөр литр шатахууны үнийг 300 төгрөгөөр нэмсэн. Жишээлбэл,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zah.jpg&w=700&h=480",
    title: "Зах худалдааны төвүүдийн ажиллах хуваарь",
    writer: "Г.Очир",
    date: "2021/07/16",
    comments: "0",
    text: "Үндэсний их баяр наадмын амралтын өдрүүд үргэлжилж байна. Долдугаар сарын 10-18-нд буюу нийт,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/10mynga.jpg&w=700&h=480",
    title: "Ардын хувьсгалын 100 жилийн ойн дурсгалын 10.000-ын дэвсгэрт",
    writer: "Г.Очир",
    date: "2021/07/10",
    comments: "",
    text: "Монголбанк Ардын хувьсгалын 100 жилийн ойд зориулан гүйлгээнд хүчин төгөлдөр дурсгалын 10000",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Tow_bair%20(1).JPG&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/09",
    comments: "0",
    text: "Банкны тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийн төслийг 2021 оны 01 дүгээр сарын",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/download-2.jpg&w=700&h=480",
    title:
      "ТАНИЛЦ: Хүүхдийн мөнгө, тэтгэвэр, тэтгэмжийг дараах өдрүүдэд олгох ХУВААРЬ",
    writer: "Г.Очир",
    date: "2021/07/09",
    comments: "1",
    text: "Хөдөлмөр, халамжийн үйлчилгээний ерөнхий газраас 2021 оны долдугаар сарын нийгмийн халамжийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/mongo.jpg&w=700&h=480",
    title: "УЕПГ: Мөнгө угаах гэмт хэрэг 7 хувиар өсчээ",
    writer: "Г.Очир",
    date: "2021/07/08",
    comments: "0",
    text: "Прокурорын байгууллагаас он гарснаар Эрүүгийн хуульд заасан мөнгө угаах 245 гэмт хэрэгт",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Бизнес эрхлэгч эмэгтэйчүүдэд зориулсан “Дижитал шилжилт” сургалтыг зохион байгууллаа",
    writer: "Д.Баасансүх",
    date: "2021/07/08",
    comments: "0",
    text: "Голомт банк болон Бизнес эрхлэгч Эмэгтэйчүүдийн Ментор Клуб хамтран “Бизнес эрхлэгч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Blue%20Photo%20Vintage%20Sympathy%20Card%20(58).jpg&w=700&h=480",
    title:
      "20,000 орчим аав 0-3 насны хүүхдээ асарч байгаа тэтгэмжид хамрагдахаар боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/07",
    comments: "0",
    text: "УИХ-аас эх, олон хүүхэдтэй өрх толгойлсон эх, эцэгт тэтгэмж олгох тухай хуулийг баталж",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Хөрөнгийн зах зээлийн топ 5 компанийн өчигдөр, өнөөдөр",
    writer: "Д.Баасансүх",
    date: "2021/08/18",
    comments: "0",
    text: "Монголын Хөрөнгийн Бирж энэ оны эхний зургаан сарын байдлаар 1.5 тэрбум төгрөгийн ашигтай",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/shuurhailogo%20(1)%20(3).jpg&w=700&h=480",
    title:
      "Б.Жавхлан: Эдийн засаг сэргэж байгаа ч нүүрсний экспорт багассанаар төсөвт эрсдэл учирч болзошгүй",
    writer: "Д.Баасансүх",
    date: "2021/07/20",
    comments: "0",
    text: "Засгийн газрын өнөөдрийн ээлжит бус хуралдаанаар, Эрүүл мэндээ хамгаалж эдийн засгаа сэргээх 10",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/baajiii.jpg&w=700&h=480",
    title:
      "Б.Бат-Эрдэнэ: Шатахуун импортлогч, үйлдвэрлэгч 26 компанид торгуулийн арга хэмжээ авна",
    writer: "Г.Очир",
    date: "2021/07/17",
    comments: "3",
    text: "Шатахуун импортлогчид энэ сарын 8-ны өдөр литр шатахууны үнийг 300 төгрөгөөр нэмсэн. Жишээлбэл,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zah.jpg&w=700&h=480",
    title: "Зах худалдааны төвүүдийн ажиллах хуваарь",
    writer: "Г.Очир",
    date: "2021/07/16",
    comments: "0",
    text: "Үндэсний их баяр наадмын амралтын өдрүүд үргэлжилж байна. Долдугаар сарын 10-18-нд буюу нийт,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/10mynga.jpg&w=700&h=480",
    title: "Ардын хувьсгалын 100 жилийн ойн дурсгалын 10.000-ын дэвсгэрт",
    writer: "Г.Очир",
    date: "2021/07/10",
    comments: "",
    text: "Монголбанк Ардын хувьсгалын 100 жилийн ойд зориулан гүйлгээнд хүчин төгөлдөр дурсгалын 10000",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Tow_bair%20(1).JPG&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/09",
    comments: "0",
    text: "Банкны тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийн төслийг 2021 оны 01 дүгээр сарын",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/download-2.jpg&w=700&h=480",
    title:
      "ТАНИЛЦ: Хүүхдийн мөнгө, тэтгэвэр, тэтгэмжийг дараах өдрүүдэд олгох ХУВААРЬ",
    writer: "Г.Очир",
    date: "2021/07/09",
    comments: "1",
    text: "Хөдөлмөр, халамжийн үйлчилгээний ерөнхий газраас 2021 оны долдугаар сарын нийгмийн халамжийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/mongo.jpg&w=700&h=480",
    title: "УЕПГ: Мөнгө угаах гэмт хэрэг 7 хувиар өсчээ",
    writer: "Г.Очир",
    date: "2021/07/08",
    comments: "0",
    text: "Прокурорын байгууллагаас он гарснаар Эрүүгийн хуульд заасан мөнгө угаах 245 гэмт хэрэгт",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Бизнес эрхлэгч эмэгтэйчүүдэд зориулсан “Дижитал шилжилт” сургалтыг зохион байгууллаа",
    writer: "Д.Баасансүх",
    date: "2021/07/08",
    comments: "0",
    text: "Голомт банк болон Бизнес эрхлэгч Эмэгтэйчүүдийн Ментор Клуб хамтран “Бизнес эрхлэгч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Blue%20Photo%20Vintage%20Sympathy%20Card%20(58).jpg&w=700&h=480",
    title:
      "20,000 орчим аав 0-3 насны хүүхдээ асарч байгаа тэтгэмжид хамрагдахаар боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/07",
    comments: "0",
    text: "УИХ-аас эх, олон хүүхэдтэй өрх толгойлсон эх, эцэгт тэтгэмж олгох тухай хуулийг баталж",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Хөрөнгийн зах зээлийн топ 5 компанийн өчигдөр, өнөөдөр",
    writer: "Д.Баасансүх",
    date: "2021/08/18",
    comments: "0",
    text: "Монголын Хөрөнгийн Бирж энэ оны эхний зургаан сарын байдлаар 1.5 тэрбум төгрөгийн ашигтай",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/shuurhailogo%20(1)%20(3).jpg&w=700&h=480",
    title:
      "Б.Жавхлан: Эдийн засаг сэргэж байгаа ч нүүрсний экспорт багассанаар төсөвт эрсдэл учирч болзошгүй",
    writer: "Д.Баасансүх",
    date: "2021/07/20",
    comments: "0",
    text: "Засгийн газрын өнөөдрийн ээлжит бус хуралдаанаар, Эрүүл мэндээ хамгаалж эдийн засгаа сэргээх 10",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/baajiii.jpg&w=700&h=480",
    title:
      "Б.Бат-Эрдэнэ: Шатахуун импортлогч, үйлдвэрлэгч 26 компанид торгуулийн арга хэмжээ авна",
    writer: "Г.Очир",
    date: "2021/07/17",
    comments: "3",
    text: "Шатахуун импортлогчид энэ сарын 8-ны өдөр литр шатахууны үнийг 300 төгрөгөөр нэмсэн. Жишээлбэл,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zah.jpg&w=700&h=480",
    title: "Зах худалдааны төвүүдийн ажиллах хуваарь",
    writer: "Г.Очир",
    date: "2021/07/16",
    comments: "0",
    text: "Үндэсний их баяр наадмын амралтын өдрүүд үргэлжилж байна. Долдугаар сарын 10-18-нд буюу нийт,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/10mynga.jpg&w=700&h=480",
    title: "Ардын хувьсгалын 100 жилийн ойн дурсгалын 10.000-ын дэвсгэрт",
    writer: "Г.Очир",
    date: "2021/07/10",
    comments: "",
    text: "Монголбанк Ардын хувьсгалын 100 жилийн ойд зориулан гүйлгээнд хүчин төгөлдөр дурсгалын 10000",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Tow_bair%20(1).JPG&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/09",
    comments: "0",
    text: "Банкны тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийн төслийг 2021 оны 01 дүгээр сарын",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/download-2.jpg&w=700&h=480",
    title:
      "ТАНИЛЦ: Хүүхдийн мөнгө, тэтгэвэр, тэтгэмжийг дараах өдрүүдэд олгох ХУВААРЬ",
    writer: "Г.Очир",
    date: "2021/07/09",
    comments: "1",
    text: "Хөдөлмөр, халамжийн үйлчилгээний ерөнхий газраас 2021 оны долдугаар сарын нийгмийн халамжийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/mongo.jpg&w=700&h=480",
    title: "УЕПГ: Мөнгө угаах гэмт хэрэг 7 хувиар өсчээ",
    writer: "Г.Очир",
    date: "2021/07/08",
    comments: "0",
    text: "Прокурорын байгууллагаас он гарснаар Эрүүгийн хуульд заасан мөнгө угаах 245 гэмт хэрэгт",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Бизнес эрхлэгч эмэгтэйчүүдэд зориулсан “Дижитал шилжилт” сургалтыг зохион байгууллаа",
    writer: "Д.Баасансүх",
    date: "2021/07/08",
    comments: "0",
    text: "Голомт банк болон Бизнес эрхлэгч Эмэгтэйчүүдийн Ментор Клуб хамтран “Бизнес эрхлэгч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Blue%20Photo%20Vintage%20Sympathy%20Card%20(58).jpg&w=700&h=480",
    title:
      "20,000 орчим аав 0-3 насны хүүхдээ асарч байгаа тэтгэмжид хамрагдахаар боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/07",
    comments: "0",
    text: "УИХ-аас эх, олон хүүхэдтэй өрх толгойлсон эх, эцэгт тэтгэмж олгох тухай хуулийг баталж",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Хөрөнгийн зах зээлийн топ 5 компанийн өчигдөр, өнөөдөр",
    writer: "Д.Баасансүх",
    date: "2021/08/18",
    comments: "0",
    text: "Монголын Хөрөнгийн Бирж энэ оны эхний зургаан сарын байдлаар 1.5 тэрбум төгрөгийн ашигтай",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/shuurhailogo%20(1)%20(3).jpg&w=700&h=480",
    title:
      "Б.Жавхлан: Эдийн засаг сэргэж байгаа ч нүүрсний экспорт багассанаар төсөвт эрсдэл учирч болзошгүй",
    writer: "Д.Баасансүх",
    date: "2021/07/20",
    comments: "0",
    text: "Засгийн газрын өнөөдрийн ээлжит бус хуралдаанаар, Эрүүл мэндээ хамгаалж эдийн засгаа сэргээх 10",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/baajiii.jpg&w=700&h=480",
    title:
      "Б.Бат-Эрдэнэ: Шатахуун импортлогч, үйлдвэрлэгч 26 компанид торгуулийн арга хэмжээ авна",
    writer: "Г.Очир",
    date: "2021/07/17",
    comments: "3",
    text: "Шатахуун импортлогчид энэ сарын 8-ны өдөр литр шатахууны үнийг 300 төгрөгөөр нэмсэн. Жишээлбэл,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zah.jpg&w=700&h=480",
    title: "Зах худалдааны төвүүдийн ажиллах хуваарь",
    writer: "Г.Очир",
    date: "2021/07/16",
    comments: "0",
    text: "Үндэсний их баяр наадмын амралтын өдрүүд үргэлжилж байна. Долдугаар сарын 10-18-нд буюу нийт,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/10mynga.jpg&w=700&h=480",
    title: "Ардын хувьсгалын 100 жилийн ойн дурсгалын 10.000-ын дэвсгэрт",
    writer: "Г.Очир",
    date: "2021/07/10",
    comments: "",
    text: "Монголбанк Ардын хувьсгалын 100 жилийн ойд зориулан гүйлгээнд хүчин төгөлдөр дурсгалын 10000",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Tow_bair%20(1).JPG&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/09",
    comments: "0",
    text: "Банкны тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийн төслийг 2021 оны 01 дүгээр сарын",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/download-2.jpg&w=700&h=480",
    title:
      "ТАНИЛЦ: Хүүхдийн мөнгө, тэтгэвэр, тэтгэмжийг дараах өдрүүдэд олгох ХУВААРЬ",
    writer: "Г.Очир",
    date: "2021/07/09",
    comments: "1",
    text: "Хөдөлмөр, халамжийн үйлчилгээний ерөнхий газраас 2021 оны долдугаар сарын нийгмийн халамжийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/mongo.jpg&w=700&h=480",
    title: "УЕПГ: Мөнгө угаах гэмт хэрэг 7 хувиар өсчээ",
    writer: "Г.Очир",
    date: "2021/07/08",
    comments: "0",
    text: "Прокурорын байгууллагаас он гарснаар Эрүүгийн хуульд заасан мөнгө угаах 245 гэмт хэрэгт",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Бизнес эрхлэгч эмэгтэйчүүдэд зориулсан “Дижитал шилжилт” сургалтыг зохион байгууллаа",
    writer: "Д.Баасансүх",
    date: "2021/07/08",
    comments: "0",
    text: "Голомт банк болон Бизнес эрхлэгч Эмэгтэйчүүдийн Ментор Клуб хамтран “Бизнес эрхлэгч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Blue%20Photo%20Vintage%20Sympathy%20Card%20(58).jpg&w=700&h=480",
    title:
      "20,000 орчим аав 0-3 насны хүүхдээ асарч байгаа тэтгэмжид хамрагдахаар боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/07",
    comments: "0",
    text: "УИХ-аас эх, олон хүүхэдтэй өрх толгойлсон эх, эцэгт тэтгэмж олгох тухай хуулийг баталж",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Хөрөнгийн зах зээлийн топ 5 компанийн өчигдөр, өнөөдөр",
    writer: "Д.Баасансүх",
    date: "2021/08/18",
    comments: "0",
    text: "Монголын Хөрөнгийн Бирж энэ оны эхний зургаан сарын байдлаар 1.5 тэрбум төгрөгийн ашигтай",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/shuurhailogo%20(1)%20(3).jpg&w=700&h=480",
    title:
      "Б.Жавхлан: Эдийн засаг сэргэж байгаа ч нүүрсний экспорт багассанаар төсөвт эрсдэл учирч болзошгүй",
    writer: "Д.Баасансүх",
    date: "2021/07/20",
    comments: "0",
    text: "Засгийн газрын өнөөдрийн ээлжит бус хуралдаанаар, Эрүүл мэндээ хамгаалж эдийн засгаа сэргээх 10",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/baajiii.jpg&w=700&h=480",
    title:
      "Б.Бат-Эрдэнэ: Шатахуун импортлогч, үйлдвэрлэгч 26 компанид торгуулийн арга хэмжээ авна",
    writer: "Г.Очир",
    date: "2021/07/17",
    comments: "3",
    text: "Шатахуун импортлогчид энэ сарын 8-ны өдөр литр шатахууны үнийг 300 төгрөгөөр нэмсэн. Жишээлбэл,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zah.jpg&w=700&h=480",
    title: "Зах худалдааны төвүүдийн ажиллах хуваарь",
    writer: "Г.Очир",
    date: "2021/07/16",
    comments: "0",
    text: "Үндэсний их баяр наадмын амралтын өдрүүд үргэлжилж байна. Долдугаар сарын 10-18-нд буюу нийт,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/10mynga.jpg&w=700&h=480",
    title: "Ардын хувьсгалын 100 жилийн ойн дурсгалын 10.000-ын дэвсгэрт",
    writer: "Г.Очир",
    date: "2021/07/10",
    comments: "",
    text: "Монголбанк Ардын хувьсгалын 100 жилийн ойд зориулан гүйлгээнд хүчин төгөлдөр дурсгалын 10000",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Tow_bair%20(1).JPG&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/09",
    comments: "0",
    text: "Банкны тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийн төслийг 2021 оны 01 дүгээр сарын",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/download-2.jpg&w=700&h=480",
    title:
      "ТАНИЛЦ: Хүүхдийн мөнгө, тэтгэвэр, тэтгэмжийг дараах өдрүүдэд олгох ХУВААРЬ",
    writer: "Г.Очир",
    date: "2021/07/09",
    comments: "1",
    text: "Хөдөлмөр, халамжийн үйлчилгээний ерөнхий газраас 2021 оны долдугаар сарын нийгмийн халамжийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/mongo.jpg&w=700&h=480",
    title: "УЕПГ: Мөнгө угаах гэмт хэрэг 7 хувиар өсчээ",
    writer: "Г.Очир",
    date: "2021/07/08",
    comments: "0",
    text: "Прокурорын байгууллагаас он гарснаар Эрүүгийн хуульд заасан мөнгө угаах 245 гэмт хэрэгт",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Бизнес эрхлэгч эмэгтэйчүүдэд зориулсан “Дижитал шилжилт” сургалтыг зохион байгууллаа",
    writer: "Д.Баасансүх",
    date: "2021/07/08",
    comments: "0",
    text: "Голомт банк болон Бизнес эрхлэгч Эмэгтэйчүүдийн Ментор Клуб хамтран “Бизнес эрхлэгч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Blue%20Photo%20Vintage%20Sympathy%20Card%20(58).jpg&w=700&h=480",
    title:
      "20,000 орчим аав 0-3 насны хүүхдээ асарч байгаа тэтгэмжид хамрагдахаар боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/07",
    comments: "0",
    text: "УИХ-аас эх, олон хүүхэдтэй өрх толгойлсон эх, эцэгт тэтгэмж олгох тухай хуулийг баталж",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Хөрөнгийн зах зээлийн топ 5 компанийн өчигдөр, өнөөдөр",
    writer: "Д.Баасансүх",
    date: "2021/08/18",
    comments: "0",
    text: "Монголын Хөрөнгийн Бирж энэ оны эхний зургаан сарын байдлаар 1.5 тэрбум төгрөгийн ашигтай",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/shuurhailogo%20(1)%20(3).jpg&w=700&h=480",
    title:
      "Б.Жавхлан: Эдийн засаг сэргэж байгаа ч нүүрсний экспорт багассанаар төсөвт эрсдэл учирч болзошгүй",
    writer: "Д.Баасансүх",
    date: "2021/07/20",
    comments: "0",
    text: "Засгийн газрын өнөөдрийн ээлжит бус хуралдаанаар, Эрүүл мэндээ хамгаалж эдийн засгаа сэргээх 10",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/baajiii.jpg&w=700&h=480",
    title:
      "Б.Бат-Эрдэнэ: Шатахуун импортлогч, үйлдвэрлэгч 26 компанид торгуулийн арга хэмжээ авна",
    writer: "Г.Очир",
    date: "2021/07/17",
    comments: "3",
    text: "Шатахуун импортлогчид энэ сарын 8-ны өдөр литр шатахууны үнийг 300 төгрөгөөр нэмсэн. Жишээлбэл,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zah.jpg&w=700&h=480",
    title: "Зах худалдааны төвүүдийн ажиллах хуваарь",
    writer: "Г.Очир",
    date: "2021/07/16",
    comments: "0",
    text: "Үндэсний их баяр наадмын амралтын өдрүүд үргэлжилж байна. Долдугаар сарын 10-18-нд буюу нийт,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/10mynga.jpg&w=700&h=480",
    title: "Ардын хувьсгалын 100 жилийн ойн дурсгалын 10.000-ын дэвсгэрт",
    writer: "Г.Очир",
    date: "2021/07/10",
    comments: "",
    text: "Монголбанк Ардын хувьсгалын 100 жилийн ойд зориулан гүйлгээнд хүчин төгөлдөр дурсгалын 10000",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Tow_bair%20(1).JPG&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/09",
    comments: "0",
    text: "Банкны тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийн төслийг 2021 оны 01 дүгээр сарын",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/download-2.jpg&w=700&h=480",
    title:
      "ТАНИЛЦ: Хүүхдийн мөнгө, тэтгэвэр, тэтгэмжийг дараах өдрүүдэд олгох ХУВААРЬ",
    writer: "Г.Очир",
    date: "2021/07/09",
    comments: "1",
    text: "Хөдөлмөр, халамжийн үйлчилгээний ерөнхий газраас 2021 оны долдугаар сарын нийгмийн халамжийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/mongo.jpg&w=700&h=480",
    title: "УЕПГ: Мөнгө угаах гэмт хэрэг 7 хувиар өсчээ",
    writer: "Г.Очир",
    date: "2021/07/08",
    comments: "0",
    text: "Прокурорын байгууллагаас он гарснаар Эрүүгийн хуульд заасан мөнгө угаах 245 гэмт хэрэгт",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Бизнес эрхлэгч эмэгтэйчүүдэд зориулсан “Дижитал шилжилт” сургалтыг зохион байгууллаа",
    writer: "Д.Баасансүх",
    date: "2021/07/08",
    comments: "0",
    text: "Голомт банк болон Бизнес эрхлэгч Эмэгтэйчүүдийн Ментор Клуб хамтран “Бизнес эрхлэгч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Blue%20Photo%20Vintage%20Sympathy%20Card%20(58).jpg&w=700&h=480",
    title:
      "20,000 орчим аав 0-3 насны хүүхдээ асарч байгаа тэтгэмжид хамрагдахаар боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/07",
    comments: "0",
    text: "УИХ-аас эх, олон хүүхэдтэй өрх толгойлсон эх, эцэгт тэтгэмж олгох тухай хуулийг баталж",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Хөрөнгийн зах зээлийн топ 5 компанийн өчигдөр, өнөөдөр",
    writer: "Д.Баасансүх",
    date: "2021/08/18",
    comments: "0",
    text: "Монголын Хөрөнгийн Бирж энэ оны эхний зургаан сарын байдлаар 1.5 тэрбум төгрөгийн ашигтай",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/shuurhailogo%20(1)%20(3).jpg&w=700&h=480",
    title:
      "Б.Жавхлан: Эдийн засаг сэргэж байгаа ч нүүрсний экспорт багассанаар төсөвт эрсдэл учирч болзошгүй",
    writer: "Д.Баасансүх",
    date: "2021/07/20",
    comments: "0",
    text: "Засгийн газрын өнөөдрийн ээлжит бус хуралдаанаар, Эрүүл мэндээ хамгаалж эдийн засгаа сэргээх 10",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/baajiii.jpg&w=700&h=480",
    title:
      "Б.Бат-Эрдэнэ: Шатахуун импортлогч, үйлдвэрлэгч 26 компанид торгуулийн арга хэмжээ авна",
    writer: "Г.Очир",
    date: "2021/07/17",
    comments: "3",
    text: "Шатахуун импортлогчид энэ сарын 8-ны өдөр литр шатахууны үнийг 300 төгрөгөөр нэмсэн. Жишээлбэл,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zah.jpg&w=700&h=480",
    title: "Зах худалдааны төвүүдийн ажиллах хуваарь",
    writer: "Г.Очир",
    date: "2021/07/16",
    comments: "0",
    text: "Үндэсний их баяр наадмын амралтын өдрүүд үргэлжилж байна. Долдугаар сарын 10-18-нд буюу нийт,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/10mynga.jpg&w=700&h=480",
    title: "Ардын хувьсгалын 100 жилийн ойн дурсгалын 10.000-ын дэвсгэрт",
    writer: "Г.Очир",
    date: "2021/07/10",
    comments: "",
    text: "Монголбанк Ардын хувьсгалын 100 жилийн ойд зориулан гүйлгээнд хүчин төгөлдөр дурсгалын 10000",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Tow_bair%20(1).JPG&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/09",
    comments: "0",
    text: "Банкны тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийн төслийг 2021 оны 01 дүгээр сарын",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/download-2.jpg&w=700&h=480",
    title:
      "ТАНИЛЦ: Хүүхдийн мөнгө, тэтгэвэр, тэтгэмжийг дараах өдрүүдэд олгох ХУВААРЬ",
    writer: "Г.Очир",
    date: "2021/07/09",
    comments: "1",
    text: "Хөдөлмөр, халамжийн үйлчилгээний ерөнхий газраас 2021 оны долдугаар сарын нийгмийн халамжийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/mongo.jpg&w=700&h=480",
    title: "УЕПГ: Мөнгө угаах гэмт хэрэг 7 хувиар өсчээ",
    writer: "Г.Очир",
    date: "2021/07/08",
    comments: "0",
    text: "Прокурорын байгууллагаас он гарснаар Эрүүгийн хуульд заасан мөнгө угаах 245 гэмт хэрэгт",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Бизнес эрхлэгч эмэгтэйчүүдэд зориулсан “Дижитал шилжилт” сургалтыг зохион байгууллаа",
    writer: "Д.Баасансүх",
    date: "2021/07/08",
    comments: "0",
    text: "Голомт банк болон Бизнес эрхлэгч Эмэгтэйчүүдийн Ментор Клуб хамтран “Бизнес эрхлэгч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Blue%20Photo%20Vintage%20Sympathy%20Card%20(58).jpg&w=700&h=480",
    title:
      "20,000 орчим аав 0-3 насны хүүхдээ асарч байгаа тэтгэмжид хамрагдахаар боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/07",
    comments: "0",
    text: "УИХ-аас эх, олон хүүхэдтэй өрх толгойлсон эх, эцэгт тэтгэмж олгох тухай хуулийг баталж",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Хөрөнгийн зах зээлийн топ 5 компанийн өчигдөр, өнөөдөр",
    writer: "Д.Баасансүх",
    date: "2021/08/18",
    comments: "0",
    text: "Монголын Хөрөнгийн Бирж энэ оны эхний зургаан сарын байдлаар 1.5 тэрбум төгрөгийн ашигтай",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/shuurhailogo%20(1)%20(3).jpg&w=700&h=480",
    title:
      "Б.Жавхлан: Эдийн засаг сэргэж байгаа ч нүүрсний экспорт багассанаар төсөвт эрсдэл учирч болзошгүй",
    writer: "Д.Баасансүх",
    date: "2021/07/20",
    comments: "0",
    text: "Засгийн газрын өнөөдрийн ээлжит бус хуралдаанаар, Эрүүл мэндээ хамгаалж эдийн засгаа сэргээх 10",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/baajiii.jpg&w=700&h=480",
    title:
      "Б.Бат-Эрдэнэ: Шатахуун импортлогч, үйлдвэрлэгч 26 компанид торгуулийн арга хэмжээ авна",
    writer: "Г.Очир",
    date: "2021/07/17",
    comments: "3",
    text: "Шатахуун импортлогчид энэ сарын 8-ны өдөр литр шатахууны үнийг 300 төгрөгөөр нэмсэн. Жишээлбэл,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zah.jpg&w=700&h=480",
    title: "Зах худалдааны төвүүдийн ажиллах хуваарь",
    writer: "Г.Очир",
    date: "2021/07/16",
    comments: "0",
    text: "Үндэсний их баяр наадмын амралтын өдрүүд үргэлжилж байна. Долдугаар сарын 10-18-нд буюу нийт,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/10mynga.jpg&w=700&h=480",
    title: "Ардын хувьсгалын 100 жилийн ойн дурсгалын 10.000-ын дэвсгэрт",
    writer: "Г.Очир",
    date: "2021/07/10",
    comments: "",
    text: "Монголбанк Ардын хувьсгалын 100 жилийн ойд зориулан гүйлгээнд хүчин төгөлдөр дурсгалын 10000",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Tow_bair%20(1).JPG&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/09",
    comments: "0",
    text: "Банкны тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийн төслийг 2021 оны 01 дүгээр сарын",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/download-2.jpg&w=700&h=480",
    title:
      "ТАНИЛЦ: Хүүхдийн мөнгө, тэтгэвэр, тэтгэмжийг дараах өдрүүдэд олгох ХУВААРЬ",
    writer: "Г.Очир",
    date: "2021/07/09",
    comments: "1",
    text: "Хөдөлмөр, халамжийн үйлчилгээний ерөнхий газраас 2021 оны долдугаар сарын нийгмийн халамжийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/mongo.jpg&w=700&h=480",
    title: "УЕПГ: Мөнгө угаах гэмт хэрэг 7 хувиар өсчээ",
    writer: "Г.Очир",
    date: "2021/07/08",
    comments: "0",
    text: "Прокурорын байгууллагаас он гарснаар Эрүүгийн хуульд заасан мөнгө угаах 245 гэмт хэрэгт",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Бизнес эрхлэгч эмэгтэйчүүдэд зориулсан “Дижитал шилжилт” сургалтыг зохион байгууллаа",
    writer: "Д.Баасансүх",
    date: "2021/07/08",
    comments: "0",
    text: "Голомт банк болон Бизнес эрхлэгч Эмэгтэйчүүдийн Ментор Клуб хамтран “Бизнес эрхлэгч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Blue%20Photo%20Vintage%20Sympathy%20Card%20(58).jpg&w=700&h=480",
    title:
      "20,000 орчим аав 0-3 насны хүүхдээ асарч байгаа тэтгэмжид хамрагдахаар боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/07",
    comments: "0",
    text: "УИХ-аас эх, олон хүүхэдтэй өрх толгойлсон эх, эцэгт тэтгэмж олгох тухай хуулийг баталж",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Хөрөнгийн зах зээлийн топ 5 компанийн өчигдөр, өнөөдөр",
    writer: "Д.Баасансүх",
    date: "2021/08/18",
    comments: "0",
    text: "Монголын Хөрөнгийн Бирж энэ оны эхний зургаан сарын байдлаар 1.5 тэрбум төгрөгийн ашигтай",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/shuurhailogo%20(1)%20(3).jpg&w=700&h=480",
    title:
      "Б.Жавхлан: Эдийн засаг сэргэж байгаа ч нүүрсний экспорт багассанаар төсөвт эрсдэл учирч болзошгүй",
    writer: "Д.Баасансүх",
    date: "2021/07/20",
    comments: "0",
    text: "Засгийн газрын өнөөдрийн ээлжит бус хуралдаанаар, Эрүүл мэндээ хамгаалж эдийн засгаа сэргээх 10",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/baajiii.jpg&w=700&h=480",
    title:
      "Б.Бат-Эрдэнэ: Шатахуун импортлогч, үйлдвэрлэгч 26 компанид торгуулийн арга хэмжээ авна",
    writer: "Г.Очир",
    date: "2021/07/17",
    comments: "3",
    text: "Шатахуун импортлогчид энэ сарын 8-ны өдөр литр шатахууны үнийг 300 төгрөгөөр нэмсэн. Жишээлбэл,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zah.jpg&w=700&h=480",
    title: "Зах худалдааны төвүүдийн ажиллах хуваарь",
    writer: "Г.Очир",
    date: "2021/07/16",
    comments: "0",
    text: "Үндэсний их баяр наадмын амралтын өдрүүд үргэлжилж байна. Долдугаар сарын 10-18-нд буюу нийт,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/10mynga.jpg&w=700&h=480",
    title: "Ардын хувьсгалын 100 жилийн ойн дурсгалын 10.000-ын дэвсгэрт",
    writer: "Г.Очир",
    date: "2021/07/10",
    comments: "",
    text: "Монголбанк Ардын хувьсгалын 100 жилийн ойд зориулан гүйлгээнд хүчин төгөлдөр дурсгалын 10000",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Tow_bair%20(1).JPG&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/09",
    comments: "0",
    text: "Банкны тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийн төслийг 2021 оны 01 дүгээр сарын",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/download-2.jpg&w=700&h=480",
    title:
      "ТАНИЛЦ: Хүүхдийн мөнгө, тэтгэвэр, тэтгэмжийг дараах өдрүүдэд олгох ХУВААРЬ",
    writer: "Г.Очир",
    date: "2021/07/09",
    comments: "1",
    text: "Хөдөлмөр, халамжийн үйлчилгээний ерөнхий газраас 2021 оны долдугаар сарын нийгмийн халамжийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/mongo.jpg&w=700&h=480",
    title: "УЕПГ: Мөнгө угаах гэмт хэрэг 7 хувиар өсчээ",
    writer: "Г.Очир",
    date: "2021/07/08",
    comments: "0",
    text: "Прокурорын байгууллагаас он гарснаар Эрүүгийн хуульд заасан мөнгө угаах 245 гэмт хэрэгт",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Бизнес эрхлэгч эмэгтэйчүүдэд зориулсан “Дижитал шилжилт” сургалтыг зохион байгууллаа",
    writer: "Д.Баасансүх",
    date: "2021/07/08",
    comments: "0",
    text: "Голомт банк болон Бизнес эрхлэгч Эмэгтэйчүүдийн Ментор Клуб хамтран “Бизнес эрхлэгч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Blue%20Photo%20Vintage%20Sympathy%20Card%20(58).jpg&w=700&h=480",
    title:
      "20,000 орчим аав 0-3 насны хүүхдээ асарч байгаа тэтгэмжид хамрагдахаар боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/07",
    comments: "0",
    text: "УИХ-аас эх, олон хүүхэдтэй өрх толгойлсон эх, эцэгт тэтгэмж олгох тухай хуулийг баталж",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Хөрөнгийн зах зээлийн топ 5 компанийн өчигдөр, өнөөдөр",
    writer: "Д.Баасансүх",
    date: "2021/08/18",
    comments: "0",
    text: "Монголын Хөрөнгийн Бирж энэ оны эхний зургаан сарын байдлаар 1.5 тэрбум төгрөгийн ашигтай",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/shuurhailogo%20(1)%20(3).jpg&w=700&h=480",
    title:
      "Б.Жавхлан: Эдийн засаг сэргэж байгаа ч нүүрсний экспорт багассанаар төсөвт эрсдэл учирч болзошгүй",
    writer: "Д.Баасансүх",
    date: "2021/07/20",
    comments: "0",
    text: "Засгийн газрын өнөөдрийн ээлжит бус хуралдаанаар, Эрүүл мэндээ хамгаалж эдийн засгаа сэргээх 10",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/baajiii.jpg&w=700&h=480",
    title:
      "Б.Бат-Эрдэнэ: Шатахуун импортлогч, үйлдвэрлэгч 26 компанид торгуулийн арга хэмжээ авна",
    writer: "Г.Очир",
    date: "2021/07/17",
    comments: "3",
    text: "Шатахуун импортлогчид энэ сарын 8-ны өдөр литр шатахууны үнийг 300 төгрөгөөр нэмсэн. Жишээлбэл,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zah.jpg&w=700&h=480",
    title: "Зах худалдааны төвүүдийн ажиллах хуваарь",
    writer: "Г.Очир",
    date: "2021/07/16",
    comments: "0",
    text: "Үндэсний их баяр наадмын амралтын өдрүүд үргэлжилж байна. Долдугаар сарын 10-18-нд буюу нийт,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/10mynga.jpg&w=700&h=480",
    title: "Ардын хувьсгалын 100 жилийн ойн дурсгалын 10.000-ын дэвсгэрт",
    writer: "Г.Очир",
    date: "2021/07/10",
    comments: "",
    text: "Монголбанк Ардын хувьсгалын 100 жилийн ойд зориулан гүйлгээнд хүчин төгөлдөр дурсгалын 10000",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Tow_bair%20(1).JPG&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/09",
    comments: "0",
    text: "Банкны тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийн төслийг 2021 оны 01 дүгээр сарын",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/download-2.jpg&w=700&h=480",
    title:
      "ТАНИЛЦ: Хүүхдийн мөнгө, тэтгэвэр, тэтгэмжийг дараах өдрүүдэд олгох ХУВААРЬ",
    writer: "Г.Очир",
    date: "2021/07/09",
    comments: "1",
    text: "Хөдөлмөр, халамжийн үйлчилгээний ерөнхий газраас 2021 оны долдугаар сарын нийгмийн халамжийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/mongo.jpg&w=700&h=480",
    title: "УЕПГ: Мөнгө угаах гэмт хэрэг 7 хувиар өсчээ",
    writer: "Г.Очир",
    date: "2021/07/08",
    comments: "0",
    text: "Прокурорын байгууллагаас он гарснаар Эрүүгийн хуульд заасан мөнгө угаах 245 гэмт хэрэгт",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Бизнес эрхлэгч эмэгтэйчүүдэд зориулсан “Дижитал шилжилт” сургалтыг зохион байгууллаа",
    writer: "Д.Баасансүх",
    date: "2021/07/08",
    comments: "0",
    text: "Голомт банк болон Бизнес эрхлэгч Эмэгтэйчүүдийн Ментор Клуб хамтран “Бизнес эрхлэгч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Blue%20Photo%20Vintage%20Sympathy%20Card%20(58).jpg&w=700&h=480",
    title:
      "20,000 орчим аав 0-3 насны хүүхдээ асарч байгаа тэтгэмжид хамрагдахаар боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/07",
    comments: "0",
    text: "УИХ-аас эх, олон хүүхэдтэй өрх толгойлсон эх, эцэгт тэтгэмж олгох тухай хуулийг баталж",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Хөрөнгийн зах зээлийн топ 5 компанийн өчигдөр, өнөөдөр",
    writer: "Д.Баасансүх",
    date: "2021/08/18",
    comments: "0",
    text: "Монголын Хөрөнгийн Бирж энэ оны эхний зургаан сарын байдлаар 1.5 тэрбум төгрөгийн ашигтай",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/shuurhailogo%20(1)%20(3).jpg&w=700&h=480",
    title:
      "Б.Жавхлан: Эдийн засаг сэргэж байгаа ч нүүрсний экспорт багассанаар төсөвт эрсдэл учирч болзошгүй",
    writer: "Д.Баасансүх",
    date: "2021/07/20",
    comments: "0",
    text: "Засгийн газрын өнөөдрийн ээлжит бус хуралдаанаар, Эрүүл мэндээ хамгаалж эдийн засгаа сэргээх 10",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/baajiii.jpg&w=700&h=480",
    title:
      "Б.Бат-Эрдэнэ: Шатахуун импортлогч, үйлдвэрлэгч 26 компанид торгуулийн арга хэмжээ авна",
    writer: "Г.Очир",
    date: "2021/07/17",
    comments: "3",
    text: "Шатахуун импортлогчид энэ сарын 8-ны өдөр литр шатахууны үнийг 300 төгрөгөөр нэмсэн. Жишээлбэл,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zah.jpg&w=700&h=480",
    title: "Зах худалдааны төвүүдийн ажиллах хуваарь",
    writer: "Г.Очир",
    date: "2021/07/16",
    comments: "0",
    text: "Үндэсний их баяр наадмын амралтын өдрүүд үргэлжилж байна. Долдугаар сарын 10-18-нд буюу нийт,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/10mynga.jpg&w=700&h=480",
    title: "Ардын хувьсгалын 100 жилийн ойн дурсгалын 10.000-ын дэвсгэрт",
    writer: "Г.Очир",
    date: "2021/07/10",
    comments: "",
    text: "Монголбанк Ардын хувьсгалын 100 жилийн ойд зориулан гүйлгээнд хүчин төгөлдөр дурсгалын 10000",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Tow_bair%20(1).JPG&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/09",
    comments: "0",
    text: "Банкны тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийн төслийг 2021 оны 01 дүгээр сарын",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/download-2.jpg&w=700&h=480",
    title:
      "ТАНИЛЦ: Хүүхдийн мөнгө, тэтгэвэр, тэтгэмжийг дараах өдрүүдэд олгох ХУВААРЬ",
    writer: "Г.Очир",
    date: "2021/07/09",
    comments: "1",
    text: "Хөдөлмөр, халамжийн үйлчилгээний ерөнхий газраас 2021 оны долдугаар сарын нийгмийн халамжийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/mongo.jpg&w=700&h=480",
    title: "УЕПГ: Мөнгө угаах гэмт хэрэг 7 хувиар өсчээ",
    writer: "Г.Очир",
    date: "2021/07/08",
    comments: "0",
    text: "Прокурорын байгууллагаас он гарснаар Эрүүгийн хуульд заасан мөнгө угаах 245 гэмт хэрэгт",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Бизнес эрхлэгч эмэгтэйчүүдэд зориулсан “Дижитал шилжилт” сургалтыг зохион байгууллаа",
    writer: "Д.Баасансүх",
    date: "2021/07/08",
    comments: "0",
    text: "Голомт банк болон Бизнес эрхлэгч Эмэгтэйчүүдийн Ментор Клуб хамтран “Бизнес эрхлэгч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Blue%20Photo%20Vintage%20Sympathy%20Card%20(58).jpg&w=700&h=480",
    title:
      "20,000 орчим аав 0-3 насны хүүхдээ асарч байгаа тэтгэмжид хамрагдахаар боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/07",
    comments: "0",
    text: "УИХ-аас эх, олон хүүхэдтэй өрх толгойлсон эх, эцэгт тэтгэмж олгох тухай хуулийг баталж",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Хөрөнгийн зах зээлийн топ 5 компанийн өчигдөр, өнөөдөр",
    writer: "Д.Баасансүх",
    date: "2021/08/18",
    comments: "0",
    text: "Монголын Хөрөнгийн Бирж энэ оны эхний зургаан сарын байдлаар 1.5 тэрбум төгрөгийн ашигтай",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/shuurhailogo%20(1)%20(3).jpg&w=700&h=480",
    title:
      "Б.Жавхлан: Эдийн засаг сэргэж байгаа ч нүүрсний экспорт багассанаар төсөвт эрсдэл учирч болзошгүй",
    writer: "Д.Баасансүх",
    date: "2021/07/20",
    comments: "0",
    text: "Засгийн газрын өнөөдрийн ээлжит бус хуралдаанаар, Эрүүл мэндээ хамгаалж эдийн засгаа сэргээх 10",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/baajiii.jpg&w=700&h=480",
    title:
      "Б.Бат-Эрдэнэ: Шатахуун импортлогч, үйлдвэрлэгч 26 компанид торгуулийн арга хэмжээ авна",
    writer: "Г.Очир",
    date: "2021/07/17",
    comments: "3",
    text: "Шатахуун импортлогчид энэ сарын 8-ны өдөр литр шатахууны үнийг 300 төгрөгөөр нэмсэн. Жишээлбэл,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zah.jpg&w=700&h=480",
    title: "Зах худалдааны төвүүдийн ажиллах хуваарь",
    writer: "Г.Очир",
    date: "2021/07/16",
    comments: "0",
    text: "Үндэсний их баяр наадмын амралтын өдрүүд үргэлжилж байна. Долдугаар сарын 10-18-нд буюу нийт,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/10mynga.jpg&w=700&h=480",
    title: "Ардын хувьсгалын 100 жилийн ойн дурсгалын 10.000-ын дэвсгэрт",
    writer: "Г.Очир",
    date: "2021/07/10",
    comments: "",
    text: "Монголбанк Ардын хувьсгалын 100 жилийн ойд зориулан гүйлгээнд хүчин төгөлдөр дурсгалын 10000",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Tow_bair%20(1).JPG&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/09",
    comments: "0",
    text: "Банкны тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийн төслийг 2021 оны 01 дүгээр сарын",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/download-2.jpg&w=700&h=480",
    title:
      "ТАНИЛЦ: Хүүхдийн мөнгө, тэтгэвэр, тэтгэмжийг дараах өдрүүдэд олгох ХУВААРЬ",
    writer: "Г.Очир",
    date: "2021/07/09",
    comments: "1",
    text: "Хөдөлмөр, халамжийн үйлчилгээний ерөнхий газраас 2021 оны долдугаар сарын нийгмийн халамжийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/mongo.jpg&w=700&h=480",
    title: "УЕПГ: Мөнгө угаах гэмт хэрэг 7 хувиар өсчээ",
    writer: "Г.Очир",
    date: "2021/07/08",
    comments: "0",
    text: "Прокурорын байгууллагаас он гарснаар Эрүүгийн хуульд заасан мөнгө угаах 245 гэмт хэрэгт",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Бизнес эрхлэгч эмэгтэйчүүдэд зориулсан “Дижитал шилжилт” сургалтыг зохион байгууллаа",
    writer: "Д.Баасансүх",
    date: "2021/07/08",
    comments: "0",
    text: "Голомт банк болон Бизнес эрхлэгч Эмэгтэйчүүдийн Ментор Клуб хамтран “Бизнес эрхлэгч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Blue%20Photo%20Vintage%20Sympathy%20Card%20(58).jpg&w=700&h=480",
    title:
      "20,000 орчим аав 0-3 насны хүүхдээ асарч байгаа тэтгэмжид хамрагдахаар боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/07",
    comments: "0",
    text: "УИХ-аас эх, олон хүүхэдтэй өрх толгойлсон эх, эцэгт тэтгэмж олгох тухай хуулийг баталж",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Хөрөнгийн зах зээлийн топ 5 компанийн өчигдөр, өнөөдөр",
    writer: "Д.Баасансүх",
    date: "2021/08/18",
    comments: "0",
    text: "Монголын Хөрөнгийн Бирж энэ оны эхний зургаан сарын байдлаар 1.5 тэрбум төгрөгийн ашигтай",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/shuurhailogo%20(1)%20(3).jpg&w=700&h=480",
    title:
      "Б.Жавхлан: Эдийн засаг сэргэж байгаа ч нүүрсний экспорт багассанаар төсөвт эрсдэл учирч болзошгүй",
    writer: "Д.Баасансүх",
    date: "2021/07/20",
    comments: "0",
    text: "Засгийн газрын өнөөдрийн ээлжит бус хуралдаанаар, Эрүүл мэндээ хамгаалж эдийн засгаа сэргээх 10",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/baajiii.jpg&w=700&h=480",
    title:
      "Б.Бат-Эрдэнэ: Шатахуун импортлогч, үйлдвэрлэгч 26 компанид торгуулийн арга хэмжээ авна",
    writer: "Г.Очир",
    date: "2021/07/17",
    comments: "3",
    text: "Шатахуун импортлогчид энэ сарын 8-ны өдөр литр шатахууны үнийг 300 төгрөгөөр нэмсэн. Жишээлбэл,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zah.jpg&w=700&h=480",
    title: "Зах худалдааны төвүүдийн ажиллах хуваарь",
    writer: "Г.Очир",
    date: "2021/07/16",
    comments: "0",
    text: "Үндэсний их баяр наадмын амралтын өдрүүд үргэлжилж байна. Долдугаар сарын 10-18-нд буюу нийт,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/10mynga.jpg&w=700&h=480",
    title: "Ардын хувьсгалын 100 жилийн ойн дурсгалын 10.000-ын дэвсгэрт",
    writer: "Г.Очир",
    date: "2021/07/10",
    comments: "",
    text: "Монголбанк Ардын хувьсгалын 100 жилийн ойд зориулан гүйлгээнд хүчин төгөлдөр дурсгалын 10000",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Tow_bair%20(1).JPG&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/09",
    comments: "0",
    text: "Банкны тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийн төслийг 2021 оны 01 дүгээр сарын",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/download-2.jpg&w=700&h=480",
    title:
      "ТАНИЛЦ: Хүүхдийн мөнгө, тэтгэвэр, тэтгэмжийг дараах өдрүүдэд олгох ХУВААРЬ",
    writer: "Г.Очир",
    date: "2021/07/09",
    comments: "1",
    text: "Хөдөлмөр, халамжийн үйлчилгээний ерөнхий газраас 2021 оны долдугаар сарын нийгмийн халамжийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/mongo.jpg&w=700&h=480",
    title: "УЕПГ: Мөнгө угаах гэмт хэрэг 7 хувиар өсчээ",
    writer: "Г.Очир",
    date: "2021/07/08",
    comments: "0",
    text: "Прокурорын байгууллагаас он гарснаар Эрүүгийн хуульд заасан мөнгө угаах 245 гэмт хэрэгт",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Бизнес эрхлэгч эмэгтэйчүүдэд зориулсан “Дижитал шилжилт” сургалтыг зохион байгууллаа",
    writer: "Д.Баасансүх",
    date: "2021/07/08",
    comments: "0",
    text: "Голомт банк болон Бизнес эрхлэгч Эмэгтэйчүүдийн Ментор Клуб хамтран “Бизнес эрхлэгч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Blue%20Photo%20Vintage%20Sympathy%20Card%20(58).jpg&w=700&h=480",
    title:
      "20,000 орчим аав 0-3 насны хүүхдээ асарч байгаа тэтгэмжид хамрагдахаар боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/07",
    comments: "0",
    text: "УИХ-аас эх, олон хүүхэдтэй өрх толгойлсон эх, эцэгт тэтгэмж олгох тухай хуулийг баталж",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Хөрөнгийн зах зээлийн топ 5 компанийн өчигдөр, өнөөдөр",
    writer: "Д.Баасансүх",
    date: "2021/08/18",
    comments: "0",
    text: "Монголын Хөрөнгийн Бирж энэ оны эхний зургаан сарын байдлаар 1.5 тэрбум төгрөгийн ашигтай",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/shuurhailogo%20(1)%20(3).jpg&w=700&h=480",
    title:
      "Б.Жавхлан: Эдийн засаг сэргэж байгаа ч нүүрсний экспорт багассанаар төсөвт эрсдэл учирч болзошгүй",
    writer: "Д.Баасансүх",
    date: "2021/07/20",
    comments: "0",
    text: "Засгийн газрын өнөөдрийн ээлжит бус хуралдаанаар, Эрүүл мэндээ хамгаалж эдийн засгаа сэргээх 10",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/baajiii.jpg&w=700&h=480",
    title:
      "Б.Бат-Эрдэнэ: Шатахуун импортлогч, үйлдвэрлэгч 26 компанид торгуулийн арга хэмжээ авна",
    writer: "Г.Очир",
    date: "2021/07/17",
    comments: "3",
    text: "Шатахуун импортлогчид энэ сарын 8-ны өдөр литр шатахууны үнийг 300 төгрөгөөр нэмсэн. Жишээлбэл,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zah.jpg&w=700&h=480",
    title: "Зах худалдааны төвүүдийн ажиллах хуваарь",
    writer: "Г.Очир",
    date: "2021/07/16",
    comments: "0",
    text: "Үндэсний их баяр наадмын амралтын өдрүүд үргэлжилж байна. Долдугаар сарын 10-18-нд буюу нийт,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/10mynga.jpg&w=700&h=480",
    title: "Ардын хувьсгалын 100 жилийн ойн дурсгалын 10.000-ын дэвсгэрт",
    writer: "Г.Очир",
    date: "2021/07/10",
    comments: "",
    text: "Монголбанк Ардын хувьсгалын 100 жилийн ойд зориулан гүйлгээнд хүчин төгөлдөр дурсгалын 10000",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Tow_bair%20(1).JPG&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/09",
    comments: "0",
    text: "Банкны тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийн төслийг 2021 оны 01 дүгээр сарын",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/download-2.jpg&w=700&h=480",
    title:
      "ТАНИЛЦ: Хүүхдийн мөнгө, тэтгэвэр, тэтгэмжийг дараах өдрүүдэд олгох ХУВААРЬ",
    writer: "Г.Очир",
    date: "2021/07/09",
    comments: "1",
    text: "Хөдөлмөр, халамжийн үйлчилгээний ерөнхий газраас 2021 оны долдугаар сарын нийгмийн халамжийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/mongo.jpg&w=700&h=480",
    title: "УЕПГ: Мөнгө угаах гэмт хэрэг 7 хувиар өсчээ",
    writer: "Г.Очир",
    date: "2021/07/08",
    comments: "0",
    text: "Прокурорын байгууллагаас он гарснаар Эрүүгийн хуульд заасан мөнгө угаах 245 гэмт хэрэгт",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Бизнес эрхлэгч эмэгтэйчүүдэд зориулсан “Дижитал шилжилт” сургалтыг зохион байгууллаа",
    writer: "Д.Баасансүх",
    date: "2021/07/08",
    comments: "0",
    text: "Голомт банк болон Бизнес эрхлэгч Эмэгтэйчүүдийн Ментор Клуб хамтран “Бизнес эрхлэгч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Blue%20Photo%20Vintage%20Sympathy%20Card%20(58).jpg&w=700&h=480",
    title:
      "20,000 орчим аав 0-3 насны хүүхдээ асарч байгаа тэтгэмжид хамрагдахаар боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/07",
    comments: "0",
    text: "УИХ-аас эх, олон хүүхэдтэй өрх толгойлсон эх, эцэгт тэтгэмж олгох тухай хуулийг баталж",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Хөрөнгийн зах зээлийн топ 5 компанийн өчигдөр, өнөөдөр",
    writer: "Д.Баасансүх",
    date: "2021/08/18",
    comments: "0",
    text: "Монголын Хөрөнгийн Бирж энэ оны эхний зургаан сарын байдлаар 1.5 тэрбум төгрөгийн ашигтай",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/shuurhailogo%20(1)%20(3).jpg&w=700&h=480",
    title:
      "Б.Жавхлан: Эдийн засаг сэргэж байгаа ч нүүрсний экспорт багассанаар төсөвт эрсдэл учирч болзошгүй",
    writer: "Д.Баасансүх",
    date: "2021/07/20",
    comments: "0",
    text: "Засгийн газрын өнөөдрийн ээлжит бус хуралдаанаар, Эрүүл мэндээ хамгаалж эдийн засгаа сэргээх 10",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/baajiii.jpg&w=700&h=480",
    title:
      "Б.Бат-Эрдэнэ: Шатахуун импортлогч, үйлдвэрлэгч 26 компанид торгуулийн арга хэмжээ авна",
    writer: "Г.Очир",
    date: "2021/07/17",
    comments: "3",
    text: "Шатахуун импортлогчид энэ сарын 8-ны өдөр литр шатахууны үнийг 300 төгрөгөөр нэмсэн. Жишээлбэл,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/zah.jpg&w=700&h=480",
    title: "Зах худалдааны төвүүдийн ажиллах хуваарь",
    writer: "Г.Очир",
    date: "2021/07/16",
    comments: "0",
    text: "Үндэсний их баяр наадмын амралтын өдрүүд үргэлжилж байна. Долдугаар сарын 10-18-нд буюу нийт,",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/10mynga.jpg&w=700&h=480",
    title: "Ардын хувьсгалын 100 жилийн ойн дурсгалын 10.000-ын дэвсгэрт",
    writer: "Г.Очир",
    date: "2021/07/10",
    comments: "",
    text: "Монголбанк Ардын хувьсгалын 100 жилийн ойд зориулан гүйлгээнд хүчин төгөлдөр дурсгалын 10000",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Tow_bair%20(1).JPG&w=700&h=480",
    title: "Ерөнхий Сайд эхний гадаад айлчлалаасаа “ганзага” дүүрэн буулаа",
    writer: "Д.Баасансүх",
    date: "2021/07/09",
    comments: "0",
    text: "Банкны тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийн төслийг 2021 оны 01 дүгээр сарын",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/download-2.jpg&w=700&h=480",
    title:
      "ТАНИЛЦ: Хүүхдийн мөнгө, тэтгэвэр, тэтгэмжийг дараах өдрүүдэд олгох ХУВААРЬ",
    writer: "Г.Очир",
    date: "2021/07/09",
    comments: "1",
    text: "Хөдөлмөр, халамжийн үйлчилгээний ерөнхий газраас 2021 оны долдугаар сарын нийгмийн халамжийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/mongo.jpg&w=700&h=480",
    title: "УЕПГ: Мөнгө угаах гэмт хэрэг 7 хувиар өсчээ",
    writer: "Г.Очир",
    date: "2021/07/08",
    comments: "0",
    text: "Прокурорын байгууллагаас он гарснаар Эрүүгийн хуульд заасан мөнгө угаах 245 гэмт хэрэгт",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title:
      "Бизнес эрхлэгч эмэгтэйчүүдэд зориулсан “Дижитал шилжилт” сургалтыг зохион байгууллаа",
    writer: "Д.Баасансүх",
    date: "2021/07/08",
    comments: "0",
    text: "Голомт банк болон Бизнес эрхлэгч Эмэгтэйчүүдийн Ментор Клуб хамтран “Бизнес эрхлэгч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/Blue%20Photo%20Vintage%20Sympathy%20Card%20(58).jpg&w=700&h=480",
    title:
      "20,000 орчим аав 0-3 насны хүүхдээ асарч байгаа тэтгэмжид хамрагдахаар боллоо",
    writer: "Д.Баасансүх",
    date: "2021/07/07",
    comments: "0",
    text: "УИХ-аас эх, олон хүүхэдтэй өрх толгойлсон эх, эцэгт тэтгэмж олгох тухай хуулийг баталж",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/77777-1.jpg&w=700&h=480",
    title: 'Замын-Үүдийнхний булхайг "30 хоног"-оор багасгавал бол оо!',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монгол Улс урд, хойноо хоёр том боомттой. Хойшоо ОХУ руу, урагшаа БНХАУ руу. Хойд боомтоос урд",
  },
];

const society = [
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл хорио тогтоох ямар нэгэн шийдвэр гаргаагүй",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "Койн авснаар мөнгө угаах, терроризмыг санхүүжүүлэх хэрэгт холбогдох аюултай",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "БШУЯ: ӨВӨРХАНГАЙ АЙМАГТ БАГШ НАРЫН БАГА ХУРАЛ БОЛЛОО",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title:
      "65-аас дээш насны 450 мянга орчим иргэнд коронавируст халдварын эсрэг вакцины гурав дахь тунг хийхээр төлөвлөж байгаа",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Коронавирусийн бүх хувилбараас хамгаалдаг эсрэг биет илрүүлжээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "АНУ-ын Сент-Луис хот дахь Вашингтоны их сургуулийн Анагаах ухааны сургуулийн эрдэмтэд мутацид",
  },
];
const mining = [
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/STANTS.jpg&w=700&h=480",
    title: "Нефтийн ханш өссөнөөс Монголд шатахууны үнэ нэмэгджээ",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Монголчуудын өргөн хэрэглэдэг АИ92 шатахууны үнэ өчигдрөөс зарим шатахуун түгээх станцуудад",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaa.JPG&w=700&h=480",
    title:
      "“ЦАГААН ХАД“ тэг зогсолт хийж, ирэх сарын 6-ныг хүртэл экспорт зогслоо",
    writer: "Д.Баасансүх",
    date: "2021/07/15",
    comments: "0",
    text: 'Өмнөговь аймгийн Ханбогд сумын "Цагаан хад" суурьшлын бүсэд коронавирусийн 11',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/tuul.jpg&w=700&h=480",
    title: "САЙН МЭДЭЭ: Туул голын эрэгт олгосон хууль 19 зөвшөөрлийг цуцалжээ",
    writer: "Г.Очир",
    date: "2021/06/15",
    comments: "0",
    text: "Туул голын эрэг дээр хамгаалалтын бүсэд орсон 19 ААН-ийн газрыг цуцалжээ. Энэ нь Хан Хиллс",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "“Нүүрсчид”-ийн 10 жилийн авлигын мөрөөр...",
    writer: "Шуурхай",
    date: "2021/07/05",
    comments: "10",
    text: "Одоогоор ил болсон Монголын хамгийн том нүүрсний орд бол Тавантолгой юм. Энэ бүлэг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=/storage//uploads/2021/04/cb4407c6e8c669b1d17105a845f8f1a6.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
];

const entertainment = [
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Бидний найдах мега төсөл",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Цар тахал, Оюутолгойн асуудлаар шуугиж байх зуур бидэнд  хамгийн хурдан хугацаанд ашгаа өгөх",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Паралимпын наадмын нээлт өнөөдөр болно",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Зуны 16 дахь удаагийн паралимпын наадам өнөөдөр Токио хотноо нээлтээ хийнэ. Энэ удаагийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: '"The Hu" хамтлагт зориулсан цор ганц бүтээлийг',
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Дэлхийд хүннү рокийг цуурайтуулж байгаа “The Hu” хамтлагт зориулсан цор ганц уран",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Месси яагаад 30 дугаарыг сонгосон бэ?",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "“30” дугаар. Францын лигт энэ дугаарыг гуравдугаар зэрэглэлийн хөлбөмбөгчдөд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/NewFolder/ccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Үндэсний шигшээ багийн цалин, урамшуулал",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Эх орныхоо нэрийг дэлхийд дуурсгаж, амжилт үзүүлсэн тамирчиддаа хөдөлмөр, хичээл зүтгэлийг",
  },
];

const worldWide = [
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpeg&w=700&h=480",
    title: "Орос, Хятадыг холбосон шинэ гүүр",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Оросын Алс Дорнод дахь хамгийн том дэд бүтцийн төсөл дууслаа. Энэ бол Амур голын гүүр. Энэ гүүр",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Хятадын идэвхгүй вакцинууд “Дельта” хувилбарын эсрэг",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "СИНГАПУР. /Xinhua/. Хятадын идэвхгүй вакцинууд “COVID-19”-ийн “Дельта”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Афганистаны дүрвэгсэд аль улс руу очих вэ?",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Талибан бүлэглэлд эзлэгдсэн афганчуудад эх орноосоо дүрвэхээс өөр сонголт үлдсэнгүй. Тиймдээ ч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Биткоины ханш 50 мянган ам.доллар давжээ",
    writer: "Д.Баасансүх",
    date: " 2021/08/23",
    comments: "0",
    text: "МОСКВА. /RIA Novosti/. Даваа гаргийн арилжааны явцад биткоины ханш 2.27 хувиар өсөж, 50 мянган",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Гурав дахь тунгаар Спутник вакциныг хийхэд Дельта",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Оросын эрдэмтдийн бүтээсэн “Спутник ” вакцин болон “Pfizer”-ийн хослол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpeg&w=700&h=480",
    title: "Орос, Хятадыг холбосон шинэ гүүр",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Оросын Алс Дорнод дахь хамгийн том дэд бүтцийн төсөл дууслаа. Энэ бол Амур голын гүүр. Энэ гүүр",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Хятадын идэвхгүй вакцинууд “Дельта” хувилбарын эсрэг",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "СИНГАПУР. /Xinhua/. Хятадын идэвхгүй вакцинууд “COVID-19”-ийн “Дельта”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Афганистаны дүрвэгсэд аль улс руу очих вэ?",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Талибан бүлэглэлд эзлэгдсэн афганчуудад эх орноосоо дүрвэхээс өөр сонголт үлдсэнгүй. Тиймдээ ч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Биткоины ханш 50 мянган ам.доллар давжээ",
    writer: "Д.Баасансүх",
    date: " 2021/08/23",
    comments: "0",
    text: "МОСКВА. /RIA Novosti/. Даваа гаргийн арилжааны явцад биткоины ханш 2.27 хувиар өсөж, 50 мянган",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Гурав дахь тунгаар Спутник вакциныг хийхэд Дельта",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Оросын эрдэмтдийн бүтээсэн “Спутник ” вакцин болон “Pfizer”-ийн хослол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpeg&w=700&h=480",
    title: "Орос, Хятадыг холбосон шинэ гүүр",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Оросын Алс Дорнод дахь хамгийн том дэд бүтцийн төсөл дууслаа. Энэ бол Амур голын гүүр. Энэ гүүр",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Хятадын идэвхгүй вакцинууд “Дельта” хувилбарын эсрэг",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "СИНГАПУР. /Xinhua/. Хятадын идэвхгүй вакцинууд “COVID-19”-ийн “Дельта”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Афганистаны дүрвэгсэд аль улс руу очих вэ?",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Талибан бүлэглэлд эзлэгдсэн афганчуудад эх орноосоо дүрвэхээс өөр сонголт үлдсэнгүй. Тиймдээ ч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Биткоины ханш 50 мянган ам.доллар давжээ",
    writer: "Д.Баасансүх",
    date: " 2021/08/23",
    comments: "0",
    text: "МОСКВА. /RIA Novosti/. Даваа гаргийн арилжааны явцад биткоины ханш 2.27 хувиар өсөж, 50 мянган",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Гурав дахь тунгаар Спутник вакциныг хийхэд Дельта",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Оросын эрдэмтдийн бүтээсэн “Спутник ” вакцин болон “Pfizer”-ийн хослол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpeg&w=700&h=480",
    title: "Орос, Хятадыг холбосон шинэ гүүр",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Оросын Алс Дорнод дахь хамгийн том дэд бүтцийн төсөл дууслаа. Энэ бол Амур голын гүүр. Энэ гүүр",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Хятадын идэвхгүй вакцинууд “Дельта” хувилбарын эсрэг",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "СИНГАПУР. /Xinhua/. Хятадын идэвхгүй вакцинууд “COVID-19”-ийн “Дельта”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Афганистаны дүрвэгсэд аль улс руу очих вэ?",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Талибан бүлэглэлд эзлэгдсэн афганчуудад эх орноосоо дүрвэхээс өөр сонголт үлдсэнгүй. Тиймдээ ч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Биткоины ханш 50 мянган ам.доллар давжээ",
    writer: "Д.Баасансүх",
    date: " 2021/08/23",
    comments: "0",
    text: "МОСКВА. /RIA Novosti/. Даваа гаргийн арилжааны явцад биткоины ханш 2.27 хувиар өсөж, 50 мянган",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Гурав дахь тунгаар Спутник вакциныг хийхэд Дельта",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Оросын эрдэмтдийн бүтээсэн “Спутник ” вакцин болон “Pfizer”-ийн хослол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpeg&w=700&h=480",
    title: "Орос, Хятадыг холбосон шинэ гүүр",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Оросын Алс Дорнод дахь хамгийн том дэд бүтцийн төсөл дууслаа. Энэ бол Амур голын гүүр. Энэ гүүр",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Хятадын идэвхгүй вакцинууд “Дельта” хувилбарын эсрэг",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "СИНГАПУР. /Xinhua/. Хятадын идэвхгүй вакцинууд “COVID-19”-ийн “Дельта”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Афганистаны дүрвэгсэд аль улс руу очих вэ?",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Талибан бүлэглэлд эзлэгдсэн афганчуудад эх орноосоо дүрвэхээс өөр сонголт үлдсэнгүй. Тиймдээ ч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Биткоины ханш 50 мянган ам.доллар давжээ",
    writer: "Д.Баасансүх",
    date: " 2021/08/23",
    comments: "0",
    text: "МОСКВА. /RIA Novosti/. Даваа гаргийн арилжааны явцад биткоины ханш 2.27 хувиар өсөж, 50 мянган",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Гурав дахь тунгаар Спутник вакциныг хийхэд Дельта",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Оросын эрдэмтдийн бүтээсэн “Спутник ” вакцин болон “Pfizer”-ийн хослол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpeg&w=700&h=480",
    title: "Орос, Хятадыг холбосон шинэ гүүр",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Оросын Алс Дорнод дахь хамгийн том дэд бүтцийн төсөл дууслаа. Энэ бол Амур голын гүүр. Энэ гүүр",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Хятадын идэвхгүй вакцинууд “Дельта” хувилбарын эсрэг",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "СИНГАПУР. /Xinhua/. Хятадын идэвхгүй вакцинууд “COVID-19”-ийн “Дельта”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Афганистаны дүрвэгсэд аль улс руу очих вэ?",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Талибан бүлэглэлд эзлэгдсэн афганчуудад эх орноосоо дүрвэхээс өөр сонголт үлдсэнгүй. Тиймдээ ч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Биткоины ханш 50 мянган ам.доллар давжээ",
    writer: "Д.Баасансүх",
    date: " 2021/08/23",
    comments: "0",
    text: "МОСКВА. /RIA Novosti/. Даваа гаргийн арилжааны явцад биткоины ханш 2.27 хувиар өсөж, 50 мянган",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Гурав дахь тунгаар Спутник вакциныг хийхэд Дельта",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Оросын эрдэмтдийн бүтээсэн “Спутник ” вакцин болон “Pfizer”-ийн хослол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpeg&w=700&h=480",
    title: "Орос, Хятадыг холбосон шинэ гүүр",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Оросын Алс Дорнод дахь хамгийн том дэд бүтцийн төсөл дууслаа. Энэ бол Амур голын гүүр. Энэ гүүр",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Хятадын идэвхгүй вакцинууд “Дельта” хувилбарын эсрэг",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "СИНГАПУР. /Xinhua/. Хятадын идэвхгүй вакцинууд “COVID-19”-ийн “Дельта”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Афганистаны дүрвэгсэд аль улс руу очих вэ?",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Талибан бүлэглэлд эзлэгдсэн афганчуудад эх орноосоо дүрвэхээс өөр сонголт үлдсэнгүй. Тиймдээ ч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Биткоины ханш 50 мянган ам.доллар давжээ",
    writer: "Д.Баасансүх",
    date: " 2021/08/23",
    comments: "0",
    text: "МОСКВА. /RIA Novosti/. Даваа гаргийн арилжааны явцад биткоины ханш 2.27 хувиар өсөж, 50 мянган",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Гурав дахь тунгаар Спутник вакциныг хийхэд Дельта",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Оросын эрдэмтдийн бүтээсэн “Спутник ” вакцин болон “Pfizer”-ийн хослол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpeg&w=700&h=480",
    title: "Орос, Хятадыг холбосон шинэ гүүр",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Оросын Алс Дорнод дахь хамгийн том дэд бүтцийн төсөл дууслаа. Энэ бол Амур голын гүүр. Энэ гүүр",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Хятадын идэвхгүй вакцинууд “Дельта” хувилбарын эсрэг",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "СИНГАПУР. /Xinhua/. Хятадын идэвхгүй вакцинууд “COVID-19”-ийн “Дельта”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Афганистаны дүрвэгсэд аль улс руу очих вэ?",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Талибан бүлэглэлд эзлэгдсэн афганчуудад эх орноосоо дүрвэхээс өөр сонголт үлдсэнгүй. Тиймдээ ч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Биткоины ханш 50 мянган ам.доллар давжээ",
    writer: "Д.Баасансүх",
    date: " 2021/08/23",
    comments: "0",
    text: "МОСКВА. /RIA Novosti/. Даваа гаргийн арилжааны явцад биткоины ханш 2.27 хувиар өсөж, 50 мянган",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Гурав дахь тунгаар Спутник вакциныг хийхэд Дельта",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Оросын эрдэмтдийн бүтээсэн “Спутник ” вакцин болон “Pfizer”-ийн хослол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpeg&w=700&h=480",
    title: "Орос, Хятадыг холбосон шинэ гүүр",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Оросын Алс Дорнод дахь хамгийн том дэд бүтцийн төсөл дууслаа. Энэ бол Амур голын гүүр. Энэ гүүр",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Хятадын идэвхгүй вакцинууд “Дельта” хувилбарын эсрэг",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "СИНГАПУР. /Xinhua/. Хятадын идэвхгүй вакцинууд “COVID-19”-ийн “Дельта”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Афганистаны дүрвэгсэд аль улс руу очих вэ?",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Талибан бүлэглэлд эзлэгдсэн афганчуудад эх орноосоо дүрвэхээс өөр сонголт үлдсэнгүй. Тиймдээ ч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Биткоины ханш 50 мянган ам.доллар давжээ",
    writer: "Д.Баасансүх",
    date: " 2021/08/23",
    comments: "0",
    text: "МОСКВА. /RIA Novosti/. Даваа гаргийн арилжааны явцад биткоины ханш 2.27 хувиар өсөж, 50 мянган",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Гурав дахь тунгаар Спутник вакциныг хийхэд Дельта",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Оросын эрдэмтдийн бүтээсэн “Спутник ” вакцин болон “Pfizer”-ийн хослол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpeg&w=700&h=480",
    title: "Орос, Хятадыг холбосон шинэ гүүр",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Оросын Алс Дорнод дахь хамгийн том дэд бүтцийн төсөл дууслаа. Энэ бол Амур голын гүүр. Энэ гүүр",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Хятадын идэвхгүй вакцинууд “Дельта” хувилбарын эсрэг",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "СИНГАПУР. /Xinhua/. Хятадын идэвхгүй вакцинууд “COVID-19”-ийн “Дельта”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Афганистаны дүрвэгсэд аль улс руу очих вэ?",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Талибан бүлэглэлд эзлэгдсэн афганчуудад эх орноосоо дүрвэхээс өөр сонголт үлдсэнгүй. Тиймдээ ч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Биткоины ханш 50 мянган ам.доллар давжээ",
    writer: "Д.Баасансүх",
    date: " 2021/08/23",
    comments: "0",
    text: "МОСКВА. /RIA Novosti/. Даваа гаргийн арилжааны явцад биткоины ханш 2.27 хувиар өсөж, 50 мянган",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Гурав дахь тунгаар Спутник вакциныг хийхэд Дельта",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Оросын эрдэмтдийн бүтээсэн “Спутник ” вакцин болон “Pfizer”-ийн хослол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpeg&w=700&h=480",
    title: "Орос, Хятадыг холбосон шинэ гүүр",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Оросын Алс Дорнод дахь хамгийн том дэд бүтцийн төсөл дууслаа. Энэ бол Амур голын гүүр. Энэ гүүр",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Хятадын идэвхгүй вакцинууд “Дельта” хувилбарын эсрэг",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "СИНГАПУР. /Xinhua/. Хятадын идэвхгүй вакцинууд “COVID-19”-ийн “Дельта”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Афганистаны дүрвэгсэд аль улс руу очих вэ?",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Талибан бүлэглэлд эзлэгдсэн афганчуудад эх орноосоо дүрвэхээс өөр сонголт үлдсэнгүй. Тиймдээ ч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Биткоины ханш 50 мянган ам.доллар давжээ",
    writer: "Д.Баасансүх",
    date: " 2021/08/23",
    comments: "0",
    text: "МОСКВА. /RIA Novosti/. Даваа гаргийн арилжааны явцад биткоины ханш 2.27 хувиар өсөж, 50 мянган",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Гурав дахь тунгаар Спутник вакциныг хийхэд Дельта",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Оросын эрдэмтдийн бүтээсэн “Спутник ” вакцин болон “Pfizer”-ийн хослол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpeg&w=700&h=480",
    title: "Орос, Хятадыг холбосон шинэ гүүр",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Оросын Алс Дорнод дахь хамгийн том дэд бүтцийн төсөл дууслаа. Энэ бол Амур голын гүүр. Энэ гүүр",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Хятадын идэвхгүй вакцинууд “Дельта” хувилбарын эсрэг",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "СИНГАПУР. /Xinhua/. Хятадын идэвхгүй вакцинууд “COVID-19”-ийн “Дельта”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Афганистаны дүрвэгсэд аль улс руу очих вэ?",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Талибан бүлэглэлд эзлэгдсэн афганчуудад эх орноосоо дүрвэхээс өөр сонголт үлдсэнгүй. Тиймдээ ч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Биткоины ханш 50 мянган ам.доллар давжээ",
    writer: "Д.Баасансүх",
    date: " 2021/08/23",
    comments: "0",
    text: "МОСКВА. /RIA Novosti/. Даваа гаргийн арилжааны явцад биткоины ханш 2.27 хувиар өсөж, 50 мянган",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Гурав дахь тунгаар Спутник вакциныг хийхэд Дельта",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Оросын эрдэмтдийн бүтээсэн “Спутник ” вакцин болон “Pfizer”-ийн хослол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpeg&w=700&h=480",
    title: "Орос, Хятадыг холбосон шинэ гүүр",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Оросын Алс Дорнод дахь хамгийн том дэд бүтцийн төсөл дууслаа. Энэ бол Амур голын гүүр. Энэ гүүр",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Хятадын идэвхгүй вакцинууд “Дельта” хувилбарын эсрэг",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "СИНГАПУР. /Xinhua/. Хятадын идэвхгүй вакцинууд “COVID-19”-ийн “Дельта”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Афганистаны дүрвэгсэд аль улс руу очих вэ?",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Талибан бүлэглэлд эзлэгдсэн афганчуудад эх орноосоо дүрвэхээс өөр сонголт үлдсэнгүй. Тиймдээ ч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Биткоины ханш 50 мянган ам.доллар давжээ",
    writer: "Д.Баасансүх",
    date: " 2021/08/23",
    comments: "0",
    text: "МОСКВА. /RIA Novosti/. Даваа гаргийн арилжааны явцад биткоины ханш 2.27 хувиар өсөж, 50 мянган",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Гурав дахь тунгаар Спутник вакциныг хийхэд Дельта",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Оросын эрдэмтдийн бүтээсэн “Спутник ” вакцин болон “Pfizer”-ийн хослол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpeg&w=700&h=480",
    title: "Орос, Хятадыг холбосон шинэ гүүр",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Оросын Алс Дорнод дахь хамгийн том дэд бүтцийн төсөл дууслаа. Энэ бол Амур голын гүүр. Энэ гүүр",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Хятадын идэвхгүй вакцинууд “Дельта” хувилбарын эсрэг",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "СИНГАПУР. /Xinhua/. Хятадын идэвхгүй вакцинууд “COVID-19”-ийн “Дельта”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Афганистаны дүрвэгсэд аль улс руу очих вэ?",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Талибан бүлэглэлд эзлэгдсэн афганчуудад эх орноосоо дүрвэхээс өөр сонголт үлдсэнгүй. Тиймдээ ч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Биткоины ханш 50 мянган ам.доллар давжээ",
    writer: "Д.Баасансүх",
    date: " 2021/08/23",
    comments: "0",
    text: "МОСКВА. /RIA Novosti/. Даваа гаргийн арилжааны явцад биткоины ханш 2.27 хувиар өсөж, 50 мянган",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Гурав дахь тунгаар Спутник вакциныг хийхэд Дельта",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Оросын эрдэмтдийн бүтээсэн “Спутник ” вакцин болон “Pfizer”-ийн хослол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpeg&w=700&h=480",
    title: "Орос, Хятадыг холбосон шинэ гүүр",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Оросын Алс Дорнод дахь хамгийн том дэд бүтцийн төсөл дууслаа. Энэ бол Амур голын гүүр. Энэ гүүр",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Хятадын идэвхгүй вакцинууд “Дельта” хувилбарын эсрэг",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "СИНГАПУР. /Xinhua/. Хятадын идэвхгүй вакцинууд “COVID-19”-ийн “Дельта”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Афганистаны дүрвэгсэд аль улс руу очих вэ?",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Талибан бүлэглэлд эзлэгдсэн афганчуудад эх орноосоо дүрвэхээс өөр сонголт үлдсэнгүй. Тиймдээ ч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Биткоины ханш 50 мянган ам.доллар давжээ",
    writer: "Д.Баасансүх",
    date: " 2021/08/23",
    comments: "0",
    text: "МОСКВА. /RIA Novosti/. Даваа гаргийн арилжааны явцад биткоины ханш 2.27 хувиар өсөж, 50 мянган",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Гурав дахь тунгаар Спутник вакциныг хийхэд Дельта",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Оросын эрдэмтдийн бүтээсэн “Спутник ” вакцин болон “Pfizer”-ийн хослол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpeg&w=700&h=480",
    title: "Орос, Хятадыг холбосон шинэ гүүр",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Оросын Алс Дорнод дахь хамгийн том дэд бүтцийн төсөл дууслаа. Энэ бол Амур голын гүүр. Энэ гүүр",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Хятадын идэвхгүй вакцинууд “Дельта” хувилбарын эсрэг",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "СИНГАПУР. /Xinhua/. Хятадын идэвхгүй вакцинууд “COVID-19”-ийн “Дельта”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Афганистаны дүрвэгсэд аль улс руу очих вэ?",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Талибан бүлэглэлд эзлэгдсэн афганчуудад эх орноосоо дүрвэхээс өөр сонголт үлдсэнгүй. Тиймдээ ч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Биткоины ханш 50 мянган ам.доллар давжээ",
    writer: "Д.Баасансүх",
    date: " 2021/08/23",
    comments: "0",
    text: "МОСКВА. /RIA Novosti/. Даваа гаргийн арилжааны явцад биткоины ханш 2.27 хувиар өсөж, 50 мянган",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Гурав дахь тунгаар Спутник вакциныг хийхэд Дельта",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Оросын эрдэмтдийн бүтээсэн “Спутник ” вакцин болон “Pfizer”-ийн хослол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpeg&w=700&h=480",
    title: "Орос, Хятадыг холбосон шинэ гүүр",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Оросын Алс Дорнод дахь хамгийн том дэд бүтцийн төсөл дууслаа. Энэ бол Амур голын гүүр. Энэ гүүр",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Хятадын идэвхгүй вакцинууд “Дельта” хувилбарын эсрэг",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "СИНГАПУР. /Xinhua/. Хятадын идэвхгүй вакцинууд “COVID-19”-ийн “Дельта”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Афганистаны дүрвэгсэд аль улс руу очих вэ?",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Талибан бүлэглэлд эзлэгдсэн афганчуудад эх орноосоо дүрвэхээс өөр сонголт үлдсэнгүй. Тиймдээ ч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Биткоины ханш 50 мянган ам.доллар давжээ",
    writer: "Д.Баасансүх",
    date: " 2021/08/23",
    comments: "0",
    text: "МОСКВА. /RIA Novosti/. Даваа гаргийн арилжааны явцад биткоины ханш 2.27 хувиар өсөж, 50 мянган",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Гурав дахь тунгаар Спутник вакциныг хийхэд Дельта",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Оросын эрдэмтдийн бүтээсэн “Спутник ” вакцин болон “Pfizer”-ийн хослол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpeg&w=700&h=480",
    title: "Орос, Хятадыг холбосон шинэ гүүр",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Оросын Алс Дорнод дахь хамгийн том дэд бүтцийн төсөл дууслаа. Энэ бол Амур голын гүүр. Энэ гүүр",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Хятадын идэвхгүй вакцинууд “Дельта” хувилбарын эсрэг",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "СИНГАПУР. /Xinhua/. Хятадын идэвхгүй вакцинууд “COVID-19”-ийн “Дельта”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Афганистаны дүрвэгсэд аль улс руу очих вэ?",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Талибан бүлэглэлд эзлэгдсэн афганчуудад эх орноосоо дүрвэхээс өөр сонголт үлдсэнгүй. Тиймдээ ч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Биткоины ханш 50 мянган ам.доллар давжээ",
    writer: "Д.Баасансүх",
    date: " 2021/08/23",
    comments: "0",
    text: "МОСКВА. /RIA Novosti/. Даваа гаргийн арилжааны явцад биткоины ханш 2.27 хувиар өсөж, 50 мянган",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Гурав дахь тунгаар Спутник вакциныг хийхэд Дельта",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Оросын эрдэмтдийн бүтээсэн “Спутник ” вакцин болон “Pfizer”-ийн хослол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpeg&w=700&h=480",
    title: "Орос, Хятадыг холбосон шинэ гүүр",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Оросын Алс Дорнод дахь хамгийн том дэд бүтцийн төсөл дууслаа. Энэ бол Амур голын гүүр. Энэ гүүр",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Хятадын идэвхгүй вакцинууд “Дельта” хувилбарын эсрэг",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "СИНГАПУР. /Xinhua/. Хятадын идэвхгүй вакцинууд “COVID-19”-ийн “Дельта”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Афганистаны дүрвэгсэд аль улс руу очих вэ?",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Талибан бүлэглэлд эзлэгдсэн афганчуудад эх орноосоо дүрвэхээс өөр сонголт үлдсэнгүй. Тиймдээ ч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Биткоины ханш 50 мянган ам.доллар давжээ",
    writer: "Д.Баасансүх",
    date: " 2021/08/23",
    comments: "0",
    text: "МОСКВА. /RIA Novosti/. Даваа гаргийн арилжааны явцад биткоины ханш 2.27 хувиар өсөж, 50 мянган",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Гурав дахь тунгаар Спутник вакциныг хийхэд Дельта",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Оросын эрдэмтдийн бүтээсэн “Спутник ” вакцин болон “Pfizer”-ийн хослол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpeg&w=700&h=480",
    title: "Орос, Хятадыг холбосон шинэ гүүр",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Оросын Алс Дорнод дахь хамгийн том дэд бүтцийн төсөл дууслаа. Энэ бол Амур голын гүүр. Энэ гүүр",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Хятадын идэвхгүй вакцинууд “Дельта” хувилбарын эсрэг",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "СИНГАПУР. /Xinhua/. Хятадын идэвхгүй вакцинууд “COVID-19”-ийн “Дельта”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Афганистаны дүрвэгсэд аль улс руу очих вэ?",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Талибан бүлэглэлд эзлэгдсэн афганчуудад эх орноосоо дүрвэхээс өөр сонголт үлдсэнгүй. Тиймдээ ч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Биткоины ханш 50 мянган ам.доллар давжээ",
    writer: "Д.Баасансүх",
    date: " 2021/08/23",
    comments: "0",
    text: "МОСКВА. /RIA Novosti/. Даваа гаргийн арилжааны явцад биткоины ханш 2.27 хувиар өсөж, 50 мянган",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Гурав дахь тунгаар Спутник вакциныг хийхэд Дельта",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Оросын эрдэмтдийн бүтээсэн “Спутник ” вакцин болон “Pfizer”-ийн хослол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpeg&w=700&h=480",
    title: "Орос, Хятадыг холбосон шинэ гүүр",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Оросын Алс Дорнод дахь хамгийн том дэд бүтцийн төсөл дууслаа. Энэ бол Амур голын гүүр. Энэ гүүр",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Хятадын идэвхгүй вакцинууд “Дельта” хувилбарын эсрэг",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "СИНГАПУР. /Xinhua/. Хятадын идэвхгүй вакцинууд “COVID-19”-ийн “Дельта”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Афганистаны дүрвэгсэд аль улс руу очих вэ?",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Талибан бүлэглэлд эзлэгдсэн афганчуудад эх орноосоо дүрвэхээс өөр сонголт үлдсэнгүй. Тиймдээ ч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Биткоины ханш 50 мянган ам.доллар давжээ",
    writer: "Д.Баасансүх",
    date: " 2021/08/23",
    comments: "0",
    text: "МОСКВА. /RIA Novosti/. Даваа гаргийн арилжааны явцад биткоины ханш 2.27 хувиар өсөж, 50 мянган",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Гурав дахь тунгаар Спутник вакциныг хийхэд Дельта",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Оросын эрдэмтдийн бүтээсэн “Спутник ” вакцин болон “Pfizer”-ийн хослол",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpeg&w=700&h=480",
    title: "Орос, Хятадыг холбосон шинэ гүүр",
    writer: "Д.Баасансүх",
    date: "2021/07/05",
    comments: "0",
    text: "Оросын Алс Дорнод дахь хамгийн том дэд бүтцийн төсөл дууслаа. Энэ бол Амур голын гүүр. Энэ гүүр",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Хятадын идэвхгүй вакцинууд “Дельта” хувилбарын эсрэг",
    writer: "Д.Баасансүх",
    date: "2021/08/05",
    comments: "0",
    text: "СИНГАПУР. /Xinhua/. Хятадын идэвхгүй вакцинууд “COVID-19”-ийн “Дельта”",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Афганистаны дүрвэгсэд аль улс руу очих вэ?",
    writer: "Д.Баасансүх",
    date: "2021/08/24",
    comments: "0",
    text: "Талибан бүлэглэлд эзлэгдсэн афганчуудад эх орноосоо дүрвэхээс өөр сонголт үлдсэнгүй. Тиймдээ ч",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Биткоины ханш 50 мянган ам.доллар давжээ",
    writer: "Д.Баасансүх",
    date: " 2021/08/23",
    comments: "0",
    text: "МОСКВА. /RIA Novosti/. Даваа гаргийн арилжааны явцад биткоины ханш 2.27 хувиар өсөж, 50 мянган",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Гурав дахь тунгаар Спутник вакциныг хийхэд Дельта",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Оросын эрдэмтдийн бүтээсэн “Спутник ” вакцин болон “Pfizer”-ийн хослол",
  },
];

const parliament = [
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Эрүүл мэндийн яам болон Улсын онцгой комиссоос хөл",
    writer: "Д.Баасансүх",
    date: "2021/08/25",
    comments: "0",
    text: "Засгийн газрын хуралдаанаас гаргасан шийдвэрийг Эрүүл мэндийн сайд С.Энхболд танилцуулах үеэрээ",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "МАН нөхөн сонгуульд нэр дэвшигчдээ энэ сарын 25-ны",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: "Монгол Улсын Их Хурлын сонгуулийн 18, 28 дугаар тойрогт явагдах УИХ-ын гишүүний нөхөн сонгуульд",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&w=700&h=480",
    title: "Коронавируст халдварын 1,566 тохиолдол шинээр батлагдаж",
    writer: "Д.Баасансүх",
    date: "2021/08/23",
    comments: "0",
    text: "Монгол Улсад сүүлийн 24 цагийн хугацаанд шинээр 1,566 хүнээс коронавирусийн халдвар",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.png&w=700&h=480",
    title: "Л.Энхсайхан: КОВИД-19 халдвараар өвчлөөд эдгэр",
    writer: "Д.Баасансүх",
    date: "2021/08/20",
    comments: "0",
    text: "ЭМЯ-ны долоо хоног бүрд хийдэг ээлжит хэвлэлийн хуралд тус яамны Нийтийн эрүүл мэндийн",
  },
  {
    image:
      "https://shuurhai.mn/thumb/timthumb.php?src=storage/ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.jpg&w=700&h=480",
    title: "Саиед Моллайд орон сууц, нэг удаагийн урамшуулал 60 сая",
    writer: "Д.Баасансүх",
    date: "2021/08/19",
    comments: "0",
    text: 'Монгол Улсын иргэн Саиед Моллай "Токио 2020" зуны олимпын наадамд амжилттай оролцон',
  },
];

export {
  politics,
  economy,
  society,
  mining,
  entertainment,
  worldWide,
  parliament,
};
