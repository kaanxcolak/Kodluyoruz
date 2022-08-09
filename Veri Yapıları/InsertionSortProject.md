# Insertion Sort Projesi

## [22,27,16,2,18,6]

---
1.Yukarıda verilen dizinin sort türüne göre aşamalarını yazınız.

```
Sırayla en küçük elemanlar bulunur ve en baştakiyle yer değiştirme işlemi gerçekleşir.
Step 1: [2,27,16,22,18,6]
Step 2: [2,6,16,22,18,27]
Step 3: [2,6,16,18,22,27]
```
---
2.Big-O gösterimini yapınız.

```
Yapılan aşamaları düşündüğümüzde 1'den n'e kadar olan sayıların toplamı olur;
n(n+1)/2 formülüne denk gelir.
Big-O : O(n^2) olur. 
```
---
3.Time Complexity;
-Average Case: Aradığımız sayının ortada olması,
-Worst Case: Aradığımız sayının sonda olması,
-Best Case: Aradığımız sayının dizinin en başında olması.
Doğrudan dizimize baktığımızda 
```
18 sayısı 4.sırada ve Average Case kapsamına girer.
```
---
[7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.
```
[2,3,5,8,7,9,4,15,6]
[2,3,4,8,7,9,5,15,6]
[2,3,4,5,7,9,8,15,6]
[2,3,4,5,6,9,5,15,7]
```
---
```
[Patika.dev](https://www.patika.dev/tr) 
```