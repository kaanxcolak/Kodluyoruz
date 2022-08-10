# Binary Search Tree Projesi

## [7,5,1,8,3,6,0,9,4,2] 
---
### Yukarıdaki dizinin Binary Search Tree aşamalarını yazınız.
---
**İkili arama ağacında temel kural düğümün solundakilerin düğümden küçük; düğümün sağındakilerin düğümden büyük olmasıdır. Bu durum sayesinde sıralı yapıyı elde ederiz.**

|   Açıklama    |  |  |  |
|--             |- |- |- |
|**root=7**     |- |7 |- |

**5 sayısı 7'den küçük sola ekleriz.**

|   Açıklama  |     |  |  |
|--           |-    |- |- |
|             |     |  | 7|  
|             |     | /|  | 
|**5 ekledik**|**5**|  |  | 


**1 sayısı 5'ten ve 7'den küçük olduğunda 7 ve 5'in soluna ekledik** 
|     Açıklama  |     |  |  |  |  |
|             --|--   |--|- |- |- |
|               |     |  |  |  | 7|  
|               |     |  |  | /|  | 
|               |     |  | 5|  |  |  
|               |     | /|  |  |  | 
|**1 ekledik**  |**1**|  |  |  |  |