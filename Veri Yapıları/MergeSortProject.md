# Merge Sort Projesi

## [16,21,11,8,12,22]

---
1.Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
``` 
1.1 Başlangıçta dizimizi ikiye bölüyoruz ve tek eleman kalana kadar devam ediyoruz.
1.2 Bölme işlemi bittikten sonra tek elemanları ikili ikili birleştiriyoruz. Sıralı diziyi meydana getirene kadar devam ediyoruz.
```
---
| Aşamalar | Gösterim | 
|----------|----------| 
| 1.Aşama | [16,21,11,8,12,22]| 
| 2.Aşama | [16,21,11] -- [8,12,22] | 
| 3.Aşama | [16,21] -- [11] -- [8,12] -- [22] | 
| 4.Aşama | [16] -- [21] -- [11] -- [8] -- [12] -- [22] | 
| 5.Aşama | [16,21] -- [11] -- [8,12] -- [22] | 
| 6.Aşama | [11,16,21] -- [8,12,22] | 
| 7.Aşama | [8,11,12,16,21,22] | 

---
2. Big-O gösterimini yapınız.
---
```
O(n.logn)
```
---

```
[Patika.dev](https://www.patika.dev/tr) 
```
