# PolyAgro - Ağıllı Sera İdarəetmə Sistemi

## Layihə Haqqında

PolyAgro, ağıllı sera cihazlarını idarə etmək üçün nəzərdə tutulmuş responsiv bir veb tətbiqdir. İstifadəçilər profil yaradaraq cihazlarını əlavə edə bilər və onlardan gələn məlumatları real vaxtda izləyə bilərlər.

## Funksional Tələblər

### 1. İstifadəçi Autentifikasiyası
- Daxil ol/Qeydiyyat səhifəsi
- Profil yaratma və doğrulama
- Çıxış etmə funksiyası

### 2. Dashboard
- Sera məlumatlarını real vaxtda göstərmə:
  - Hava temperaturu
  - Karbon qazı səviyyəsi
  - Torpaq nəmliyi
  - Cihaz batareya səviyyəsi
  - Günəş batareyası vəziyyəti
- Cihazları manual idarə etmə imkanı
- Aktiv/deaktiv cihazların siyahısı

### 3. Hesabat Səhifəsi
- Müxtəlif zaman aralıqlarında sera məlumatlarının hesabatı
- Göstəricilərin qrafiklərlə təsviri
- Hesabat yükləmə imkanı

### 4. Parametrlər Səhifəsi
- Profil məlumatlarını yeniləmə
- Cihaz əlavə etmə/silmə
- İnterfeys tənzimləmələri (dil, tema və s.)
- Bildiriş tənzimləmələri

## Texniki Tələblər

### Frontend
- React.js və TypeScript
- Tailwind CSS
- Responsive dizayn
- Çoxdilli dəstək (Azərbaycan, Rus, İngilis)
- Açıq/Qaranlıq tema dəstəyi

### Backend və Verilənlər Bazası
- İlkin mərhələdə: localStorage
- Son mərhələdə: Google Firebase

## İstifadəçi İnterfeysi

1. Daxil ol/Qeydiyyat səhifəsi
2. Əsas dashboard
3. Hesabat səhifəsi
4. Parametrlər səhifəsi

## Layihə Mərhələləri

### Mərhələ 1: Hazırlıq və Planlaşdırma
- [x] PRD yaratma
- [x] Layihə strukturunun qurulması
- [x] Komponentlərin planlaşdırılması

### Mərhələ 2: Frontend İnkişafı
- [x] React və TypeScript quraşdırılması
- [x] Tailwind CSS quraşdırılması
- [x] Component strukturunun yaradılması
- [x] Routing quraşdırılması

### Mərhələ 3: Səhifələrin Tətbiqi
- [x] Daxil ol/Qeydiyyat səhifəsi
  - [x] Giriş yaparken xəta bildirişi düzəldildi
  - [x] Şifrə xətası bildirişi təkmilləşdirildi
- [ ] Dashboard səhifəsi
- [ ] Hesabat səhifəsi
- [ ] Parametrlər səhifəsi

### Mərhələ 4: Funksionallıq
- [x] LocalStorage ilə istifadəçi məlumatlarının saxlanması
- [x] Çoxdilli dəstək tətbiqi
- [x] Açıq/Qaranlıq tema dəstəyi
- [ ] Cihaz idarəetmə funksiyası

### Mərhələ 5: Firebase İnteqrasiyası
- [ ] Firebase quraşdırılması
- [ ] Autentifikasiya
- [ ] Verilənlər bazası quraşdırılması
- [ ] Real vaxt məlumat sinxronizasiyası

### Mərhələ 6: Test və Optimallaşdırma
- [ ] Təhlükəsizlik yoxlaması
- [ ] Responsiv dizayn yoxlaması
- [ ] Performans optimallaşdırması
- [ ] Əlçatanlıq testləri

## Təfərrüatlar

### Dil Dəstəyi
- Varsayılan: Azərbaycan
- Əlavə dillər: Rus, İngilis

### Tema
- Varsayılan: Açıq tema
- Alternativ: Qaranlıq tema

### Texnologiya Yeniləmələri
- Tailwind CSS v3.3.0 (stabillik üçün seçildi)
- PostCSS v8.4.31
- Autoprefixer v10.4.14

### Saxlama
- İstifadəçi tərcihləri (dil, tema) localStorage-də saxlanılacaq
- İstifadəçi və cihaz məlumatları əvvəlcə localStorage-də, sonra Firebase-də saxlanılacaq 