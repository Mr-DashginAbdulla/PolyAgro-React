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
- [ ] Layihə strukturunun qurulması
- [ ] Komponentlərin planlaşdırılması

### Mərhələ 2: Frontend İnkişafı
- [ ] React və TypeScript quraşdırılması
- [ ] Tailwind CSS quraşdırılması
- [ ] Component strukturunun yaradılması
- [ ] Routing quraşdırılması

### Mərhələ 3: Səhifələrin Tətbiqi
- [ ] Daxil ol/Qeydiyyat səhifəsi
- [ ] Dashboard səhifəsi
- [ ] Hesabat səhifəsi
- [ ] Parametrlər səhifəsi

### Mərhələ 4: Funksionallıq
- [ ] LocalStorage ilə istifadəçi məlumatlarının saxlanması
- [ ] Çoxdilli dəstək tətbiqi
- [ ] Açıq/Qaranlıq tema dəstəyi
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

### Saxlama
- İstifadəçi tərcihləri (dil, tema) localStorage-də saxlanılacaq
- İstifadəçi və cihaz məlumatları əvvəlcə localStorage-də, sonra Firebase-də saxlanılacaq 