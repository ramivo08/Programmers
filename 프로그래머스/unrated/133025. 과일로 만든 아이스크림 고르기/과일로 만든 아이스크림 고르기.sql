-- 코드를 입력하세요

-- LEFT JOIN 사용
-- SELECT A.FLAVOR
-- FROM FIRST_HALF A
-- left join ICECREAM_INFO B
-- on A.FLAVOR = B.FLAVOR
-- where B.INGREDIENT_TYPE= 'fruit_based'
-- and A.TOTAL_ORDER > 3000
-- order by A.TOTAL_ORDER desc --총주문량이 큰순서대로라서 내림차순


-- 서브쿼리 사용
-- SELECT A.FLAVOR
-- FROM FIRST_HALF A , ICECREAM_INFO B 
-- WHERE A.FLAVOR = B.FLAVOR
-- AND B.INGREDIENT_TYPE like '%fruit_based%'
-- AND A.TOTAL_ORDER > 3000
-- ORDER BY A.TOTAL_ORDER DESC


-- 서브쿼리 사용
select flavor
from first_half
where total_order > 3000
and flavor in(select flavor from icecream_info where ingredient_type ='fruit_based')
order by total_order desc;