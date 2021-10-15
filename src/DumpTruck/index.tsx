import styles from './Dumptruck.module.css';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import Rock from './Rock';

interface OverlayTextProps {
  text: string;
  source?: string;
}

const OverlayText = ({ source, text }: OverlayTextProps) => {
  return (
    <div className={styles.overlayText}>
      {text}
      <div className={styles.overlaySource}>Kilde: {source}</div>
    </div>
  );
};

const getRandomSize = (): 'small' | 'medium' | 'large' => {
  const rand = Math.random();
  if (rand < 0.23) {
    return 'small';
  } else if (rand < 0.76) {
    return 'medium';
  } else {
    return 'large';
  }
};

const getOffset = (maxOffset: number): number => Math.floor(Math.random()*maxOffset);

const MAX_AMOUNT_OF_ROCKS = 30;

export default function DumpTruck() {
  const style = {
    vectorEffect: 'non-scaling-stroke',
  } as React.CSSProperties;

  const [rocks, setRocks] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const slicedFishes =
        rocks.length >= MAX_AMOUNT_OF_ROCKS ? rocks.slice(1) : rocks;
      setRocks([
        ...slicedFishes,
        <Rock size={getRandomSize()} offset={getOffset(30)}key={`${Math.random()}`} />,
      ]);
    }, 800);
    return () => {
      clearInterval(interval);
    };
  }, [rocks]);

  return (
    <section className={classNames(styles.dumpsection)}>
      {rocks.map((Rock) => Rock)}
      <OverlayText
        text={
          'Hver time dumpes 17 lastebillass giftig slam i Repparfjorden '
        }
        source={
          'https://naturvernforbundet.no/repparfjord/norway-to-allow-new-mine-waste-dumping-in-national-salmon-fjord-article38878-3800.html'
        }
      />
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 1200"
          className={classNames(styles.dumptruck)}
        >
          <path
            className="1"
            stroke="#000"
            fill="#50aab4"
            d="m-2.712-5.667 1922.563-2.672.862 619.672L-1.85 614.005z"
          />
          <path
            className={styles.clouds1}
            opacity=".7"
            d="m1686.907 64.28 2.296-1.054c6.887-3.161 10.487-3.212 16.307-2.859 3.681.224 9.11-.44 11.716-.75 3.685-.44 5.858-.376 5.858-.376l4.591-2.107c2.296-1.054 3.34-.855 5.858-.376 2.519.48 2.31 1.931 4.828 2.41 2.519.48 7.124 1.357 9.42.304 0 0 2.47 1.075 11.715-.751 2.565-.507 6.895.93 9.42.303 5.647-1.404 11.108 1.16 17.81 3.391 10.597 3.529 18.82 9.93 20.58 11.374 3.934 3.228 6.094 4.143 7.36 5.875l5.065 6.928 6.33 8.661c3.8 5.196 6.332 8.66 6.568 13.179l.473 9.036c-2.059 5.572-2.852 12.876-4.911 18.447-1.03 2.786-4.824 8.244-8.71 13.252-5.665 7.3-11.634 12.237-22.485 19.573-4.03 2.725-16.07 7.377-20.662 9.484l-11.479 5.27c-4.592 2.107-5.635 1.908-8.154 1.429-2.518-.48-3.252.064-5.857.375-3.685.44-3.562-.678-4.829-2.41l-1.266-1.733c-1.03 2.786-2.413 5.637.947 18.073 3.866 14.314 7.602 22.019 8.307 23.946 1.576 4.311 1.502 6.25 1.502 6.25 1.267 1.733-.422 3.936-2.059 5.572-4.628 4.629-6.703 8.247-9.976 11.52-2.314 2.314-8.947 8.733-13.538 10.84l-16.07 7.377c-4.592 2.107-6.43 4.013-11.48 5.269-5.646 1.403-7.542 1.05-9.42-.303-6.768-4.877-11.952-3.767-15.514-4.446-3.562-.678-5.493-1.396-8.39-3.089-2.048-1.197-1.266-1.732-2.532-3.464l-6.331-8.66-5.065-6.929c-1.266-1.732-1.266-1.732-3.562-.678l-6.887 3.161c-4.592 2.108-5.622 4.894-8.947 8.733-3.325 3.84-5.63 8.336-9.976 11.52-1.944 1.423-4.592 2.107-13.775 6.322-4.591 2.108-8.067 1.876-16.307 2.858-5.826.695-10.933.216-12.982-.98-5.793-3.386-12.982-.982-15.277.072-2.296 1.054-7.124-1.357-8.39-3.089l-3.563-.678-3.562-.679-2.532-3.464-3.799-5.196-2.532-3.465c-2.532-3.464.11-8.963.556-11.822.705-4.52 1.693-8.062 1.823-10.09.29-4.533 2.06-5.571.793-7.303l1.03-2.786 1.03-2.786c-1.267-1.732.073-1.94-1.504-6.25-1.41-3.856-9.656-4.821-12.188-8.285-2.533-3.465-7.363-5.468-13.219-5.5-2.618-.014-7.371.894-9.42-.303-2.896-1.692-2.309-1.93-4.828-2.41-2.518-.48-3.339.855-5.857.375-2.52-.48-4.829-2.41-6.095-4.142l-3.798-5.197-3.8-5.196-2.531-3.464c2.295-1.054 4.336-5.365 6.65-7.68 3.273-3.272 10.213-7 12.509-8.054l9.183-4.216 6.888-3.16c2.295-1.055 5.839.884 8.153-1.43 1.637-1.637-5.25-1.536-11.952-3.767-5.299-1.765-14.485-7.232-18.283-12.428l-7.597-10.393c-1.267-1.732-1.503-6.25-2.77-7.982-1.266-1.732 2.06-5.572 2.06-5.572 2.296-1.054 4.141-3.503 6.65-7.68 1.587-2.64 3.335-7.281 7.68-10.465 3.888-2.847 6.888-3.16 9.184-4.215l9.183-4.215s1.986-1.797 4.592-2.107c3.685-.44 8.746-.431 15.514 4.445 5.631 4.057 10.346 11.496 14.958 16.268 6.338 6.557 10.922 6.553 12.189 8.285 1.266 1.732 5.971 5.26 9.656 4.82 2.606-.31 4.592-2.107 6.887-3.16 4.592-2.108 12.184-4.53 16.07-7.377 4.347-3.183 4.356-6.626 6.415-12.198 1.03-2.785.793-7.304.793-7.304 3.326-3.84 8.34-9.882 9.976-11.519 2.315-2.314 3.39-9.173 4.119-11.143 1.456-3.94 3.38-6.354 3.088-8.358-.411-2.833-.004-4.254 2.06-5.572 6.524-4.166 7.917-5.947 10.212-7 2.296-1.055 8.154-1.43 11.716-.752 3.562.679 3.773 1.707 9.42.303 2.525-.627 7.124 1.357 10.686 2.035 7.124 1.357 10.897 3.063 16.544 1.66 2.525-.628 2.295-1.054 2.295-1.054 1.267 1.732 3.562.678 4.829 2.41l2.532 3.465 1.266 1.732 1.266 1.732"
            stroke="#000"
            fill="#97e5ef"
          />
          <path
            className={styles.clouds2}
            transform="rotate(-0.079642, 935.862, 171.523)"
            d="M830.05281,183.36855C830.05281,183.36855 828.06856,182.49651 828.06856,182.49651C822.11585,179.8804 820.5559,177.80014 818.45433,174.24347C817.12518,171.99404 814.20337,169.11815 812.80859,167.73449C810.83607,165.77768 809.98572,164.47999 809.98572,164.47999C808.00149,163.60796 806.01726,162.73592 806.01726,162.73592C804.03301,161.86388 803.78738,161.16608 803.19437,159.48144C802.60136,157.79679 804.09435,157.27322 803.50134,155.58858C802.90833,153.90393 801.82405,150.82369 799.83982,149.95166C799.83982,149.95166 799.84441,148.03008 794.19406,143.44267C792.62694,142.17035 792.20051,139.00146 790.53255,137.80573C786.8029,135.13201 786.99231,130.80137 786.33937,125.8935C785.30701,118.13344 788.05374,110.48198 788.71281,108.81163C790.18655,105.07659 790.16538,103.40836 791.31099,101.89793C791.31099,101.89793 792.45659,100.38752 795.89339,95.85629C798.18459,92.83546 799.33019,91.32505 801.62139,88.30423C805.05819,83.77299 807.34939,80.75216 811.62482,78.60337C815.90027,76.45459 820.1757,74.30579 820.1757,74.30579C826.43538,73.02905 833.84063,70.24188 840.10032,68.96513C843.23015,68.32675 850.10787,68.11421 856.58815,68.1557C866.03468,68.21618 873.32209,69.50532 884.9814,72.57849C889.31157,73.71984 898.87105,78.68275 902.83954,80.42682C904.82377,81.29885 910.77648,83.91497 912.76073,84.78701C916.72919,86.53108 916.97483,87.22889 917.56784,88.91354C918.16084,90.5982 918.99593,90.78439 920.3907,92.16802C922.36326,94.12482 921.22936,94.55047 920.08375,96.06089C920.08375,96.06089 918.93815,97.57131 918.93815,97.57131C922.068,96.93294 925.40926,96.47212 936.03992,88.97616C948.27674,80.34768 954.16899,74.73698 955.73983,73.46732C959.25229,70.62828 961.16084,69.80811 961.16084,69.80811C962.30644,68.2977 965.14894,68.30373 967.42054,68.53138C973.84558,69.17526 978.21954,68.77709 982.76276,69.23237C985.97526,69.5543 994.97513,70.57172 998.94359,72.31579C1002.9121,74.05988 1008.86481,76.67599 1012.83327,78.42006C1016.80173,80.16413 1019.41852,80.38878 1022.75444,82.78024C1026.4841,85.45398 1026.93739,86.71887 1026.41595,88.41718C1024.53588,94.54053 1027.78626,97.07494 1028.62492,99.45739C1029.46357,101.83985 1029.57952,103.28732 1029.15658,105.7327C1028.85753,107.46186 1028.01098,107.24312 1026.86538,108.75353C1026.86538,108.75353 1024.57418,111.77435 1021.13738,116.30559C1018.84618,119.32641 1017.70058,120.83683 1016.55498,122.34724C1015.40938,123.85765 1015.40938,123.85765 1017.39364,124.72969C1019.37789,125.60173 1019.37789,125.60173 1023.34635,127.3458C1027.31481,129.08987 1030.44466,128.4515 1035.55872,128.68516C1040.67283,128.91882 1045.9942,128.26433 1050.90094,129.38615C1053.09531,129.88783 1054.86945,131.13024 1062.80636,134.61837C1066.77487,136.36246 1068.00985,138.49589 1072.42059,142.87141C1075.53946,145.96539 1077.2198,149.16165 1076.92075,150.8908C1076.07486,155.78158 1081.42091,158.91019 1083.40512,159.78222C1085.38937,160.65426 1085.08242,164.54714 1083.93682,166.05755C1083.93682,166.05755 1084.18245,166.75538 1084.77542,168.43999C1085.36843,170.12464 1085.61407,170.82245 1085.61407,170.82245C1084.46847,172.33286 1083.32287,173.84327 1083.32287,173.84327C1082.17727,175.35369 1081.03167,176.86409 1079.88607,178.37451C1078.74047,179.88493 1077.59487,181.39533 1077.59487,181.39533C1075.30367,184.41616 1068.86924,185.31953 1065.91415,186.33129C1061.24172,187.93101 1057.3967,188.93044 1055.37904,189.75682C1050.86739,191.60466 1049.11938,191.03358 1047.97378,192.54399C1047.97378,192.54399 1047.05706,192.73096 1044.84393,193.18236C1042.63079,193.63377 1041.71408,193.82073 1041.71408,193.82073C1040.56848,195.33115 1039.80554,194.6409 1036.29308,197.47994C1033.1514,200.01926 1035.67913,205.26567 1033.38794,208.28648C1031.09674,211.30731 1031.18512,215.02034 1033.61265,218.45466C1034.69829,219.99054 1037.57321,222.36244 1037.27416,224.0916C1036.85122,226.53698 1036.37421,226.29981 1036.96722,227.98446C1037.56019,229.66907 1039.19706,229.5543 1039.79007,231.23895C1040.38308,232.9236 1039.48313,235.13181 1038.33752,236.64223C1037.19192,238.15264 1036.04633,239.66304 1034.90072,241.17347C1033.75512,242.68388 1032.60953,244.19428 1031.46392,245.70471C1030.31832,247.21512 1029.17273,248.72552 1029.17273,248.72552C1027.18848,247.85348 1022.1571,248.58015 1018.94456,248.2582C1014.40137,247.80289 1007.87779,245.40843 1005.89354,244.53638C1003.90929,243.66434 1001.92508,242.79231 997.95658,241.04822C993.98812,239.30415 993.98812,239.30415 992.00387,238.43211C990.01966,237.56009 990.4093,234.62753 987.19675,234.30559C984.92515,234.07793 987.91413,238.05548 988.56707,242.96335C989.08328,246.84338 987.64617,254.64195 984.20937,259.17319C980.77257,263.70443 978.48138,266.72524 977.33577,268.23567C976.19017,269.74608 971.91476,271.89488 970.76917,273.40529C969.62357,274.9157 964.50946,274.68203 964.50946,274.68203C962.52525,273.81001 959.37852,273.82179 954.28135,274.21471C951.05758,274.46323 945.83007,275.50757 940.92333,274.38575C936.5346,273.38237 934.97062,271.76964 932.98641,270.89761C929.0179,269.15352 927.0337,268.2815 925.04945,267.40945C925.04945,267.40945 922.47575,267.04902 921.08099,265.66538C919.10843,263.70858 916.99191,260.74849 918.87202,254.62517C920.43638,249.53026 925.66006,243.46593 928.34378,238.64899C932.03222,232.02876 930.10331,229.35287 931.24892,227.84245C932.39452,226.33204 933.83537,222.01352 931.86286,220.05674C930.46807,218.67306 927.89435,218.31265 925.91015,217.44063C921.94164,215.69654 916.40916,212.33973 912.02047,211.33636C907.11377,210.21456 903.77655,211.74108 897.5169,213.01783C894.38704,213.65621 890.11159,215.80498 890.11159,215.80498C884.99752,215.57134 877.04098,215.33163 874.76937,215.10399C871.55686,214.78207 864.46317,217.20612 862.25004,217.65752C857.82376,218.56034 854.67827,218.51092 852.86053,219.57265C850.28988,221.07416 848.74298,221.46822 846.60083,220.84938C839.82684,218.89246 837.5183,218.87167 835.53405,217.99963C833.5498,217.12759 830.72693,213.87311 829.88829,211.49064C829.04968,209.10821 829.95648,208.52746 826.22678,205.8537C824.55884,204.65798 824.54951,201.08882 823.71087,198.70635C822.0336,193.94147 822.10174,190.97825 818.37209,188.30453C816.70413,187.1088 816.38784,187.43249 816.38784,187.43249C817.53344,185.92208 815.54921,185.05005 816.69481,183.53963C817.84041,182.02922 817.84041,182.02922 818.986,180.51882L818.986,180.51882L820.13161,179.0084L821.27721,177.49799"
            id="svg_4"
            stroke="#000"
            fill="#97e5ef"
          ></path>
          <path
            className={styles.clouds3}
            transform="rotate(-0.079642, 360.666, 150.098)"
            d="M 271.41374 246.00195000000002 C 271.41374 246.00195000000002 268.22612 246.00195 268.22612 246.00195 C 258.66335 246.00195 254.88284 244.13103999999998 249.10057 240.59894 C 245.44354 238.36503999999996 239.29514 236.22970999999995 236.35022000000004 235.19589999999997 C 232.18543999999997 233.73383 229.97503000000003 232.49435999999997 229.97503000000003 232.49435999999997 C 226.78745 232.49436 223.59987 232.49436000000003 223.59987 232.49436000000003 C 220.41224999999997 232.49435999999997 219.47865 231.70312 217.22468000000003 229.79285000000002 C 214.97071 227.88259 216.29106999999993 226.30007 214.03709999999998 224.38981 C 211.78313000000003 222.47954999999996 207.66191 218.98679999999996 204.47433 218.98679999999996 C 204.47433 218.98679999999996 202.72384 216.40639 191.72394 213.58376 C 188.67312 212.80089 185.26349 208.80139 182.16117 208.18072 C 175.22419999999997 206.79285000000002 171.49489999999997 200.87187 166.22324 194.67315999999997 C 157.88798999999995 184.87207000000004 154.20519999999996 172.98872999999998 153.47285 170.35951000000003 C 151.83527000000007 164.48032000000003 150.2852699999999 162.25495999999998 150.28527 159.55341999999996 C 150.28527 159.55341999999996 150.28527 156.85190999999998 150.28527000000005 148.74736 C 150.28526999999997 143.34431999999998 150.28526999999997 140.64280999999997 150.28526999999997 135.23977999999994 C 150.28526999999994 127.13523 150.28527 121.73218999999997 153.47285 116.32916 C 156.66046999999995 110.92612999999997 159.84803999999997 105.52308999999997 159.84803999999997 105.52308999999997 C 166.22323000000003 100.12006 172.59839 92.01553000000001 178.97359 86.61247999999999 C 182.16117 83.91095999999997 190.25351000000003 79.57113999999999 198.09914000000003 75.80640999999999 C 209.53598999999997 70.31842000000003 219.49423000000002 67.7515 236.35024 65.00034 C 242.61041999999998 63.97858000000001 258.66336999999993 65.00033999999995 265.0385600000001 65.00034000000005 C 268.22614 65.00034000000001 277.78891 65.00033999999998 280.97653 65.00033999999997 C 287.3516900000001 65.00034 288.28533000000004 65.79159999999999 290.5393 67.70185999999995 C 292.79327 69.61214000000004 293.96957 69.36957999999998 296.91446 70.40338 C 301.07928 71.86541999999997 300.10208 73.10489000000001 300.10208 75.80640999999999 C 300.10208 75.80640999999999 300.10208 78.50793000000002 300.10208 78.50793000000002 C 303.2897 75.80640999999999 306.89427 73.21844 312.85247 56.895780000000016 C 319.71089999999987 38.10701000000003 321.68289 27.106830000000045 322.4152399999999 24.477579999999975 C 324.05279 18.598420000000004 325.60277999999994 16.37303000000003 325.60277999999994 16.37303000000003 C 325.60278 13.671519999999987 329.0330499999999 12.003830000000022 331.97801 10.970000000000056 C 340.3075699999999 8.045900000000017 345.21364 4.933140000000009 351.10356 2.86545000000001 C 355.2683 1.4033999999999196 367.04149 -2.5375899999999945 373.41665 -2.5375899999999945 C 379.79188 -2.5375899999999945 389.35464999999994 -2.537589999999966 395.72981 -2.5375899999999945 C 402.10497 -2.537590000000023 405.46309 -3.7789399999999773 411.66774000000004 -2.5375899999999945 C 418.60475 -1.1497100000000557 420.30679000000003 0.2798500000000672 421.23051 2.86545000000001 C 424.56104999999997 12.18798000000001 430.79328 13.671519999999987 433.9809 16.37303 C 437.16852000000006 19.074549999999988 438.6309600000001 20.947899999999947 440.35606 24.47757999999999 C 441.57592 26.973460000000003 440.35606 27.179100000000005 440.35606 29.880619999999993 C 440.35606 29.880619999999993 440.35605999999996 35.28365000000001 440.35605999999996 43.388200000000026 C 440.35606 48.79123 440.35606 51.49275 440.35605999999996 54.19427 C 440.35605999999996 56.89577999999999 440.35605999999996 56.89577999999999 443.54368 56.89577999999996 C 446.7312999999999 56.89578000000003 446.7312999999999 56.89578000000003 453.10645 56.89578 C 459.48160999999993 56.89577999999999 462.66922 54.19426 469.04438 51.49275 C 475.41960999999986 48.791210000000035 481.23292 44.77608000000001 488.16993 43.38820000000001 C 491.27226 42.76751 494.54516000000007 43.3882 507.29548 43.388199999999955 C 513.67071 43.38819999999998 517.10828 45.522000000000006 526.42103 48.79123000000003 C 533.00616 51.10293999999999 537.95156 54.39990999999999 539.1714199999999 56.89578 C 542.62161 63.95519 551.92181 65.00033 555.10935 65.00033000000002 C 558.2969699999999 65.00033 561.48458 70.40337 561.48458 73.10487999999998 C 561.48458 73.10487999999998 562.41823 73.89617 564.67212 75.80640000000001 C 566.9260899999999 77.71666000000003 567.85974 78.50792 567.85974 78.50792 C 567.85974 81.20943000000001 567.8597399999999 83.91095000000001 567.8597399999999 83.91095000000001 C 567.85974 86.61246999999995 567.85974 89.31398 567.85974 92.0155 C 567.85974 94.71702 567.8597400000001 97.41852999999998 567.8597400000001 97.41852999999998 C 567.85974 102.82156999999998 560.9328 107.82675 558.29697 110.92612 C 554.12931 115.82665 550.40997 119.43412999999998 548.7342 121.73218 C 544.987 126.87077 542.35904 127.13522 542.35904 129.83673 C 542.35904 129.83673 541.42539 130.62799 539.17142 132.53825 C 536.9174499999999 134.44853 535.9838 135.23977 535.9838 135.23977 C 535.9838 137.94129 534.4338 137.46515 532.7962599999998 143.34431 C 531.3315500000001 148.60282 539.1714200000001 154.1504 539.17142 159.55341 C 539.17142 164.95645 542.671 169.88518 548.73419 173.061 C 551.44575 174.48127 557.0771 175.96816 558.2969599999999 178.46404 C 560.02206 181.99374 559.2306100000001 181.95679 561.4845799999999 183.86705 C 563.73848 185.77728 565.60577 184.65832 567.85974 186.56859 C 570.11371 188.47885 571.04736 191.97160000000002 571.04736 194.67313999999996 C 571.04736 197.37465000000003 571.04736 200.07615 571.04736 202.77769 C 571.0473600000001 205.47919999999993 571.04736 208.1807 571.04736 210.88224 C 571.04736 213.58374999999998 571.04736 216.28524999999996 571.04736 216.28524999999996 C 567.85974 216.28525000000002 562.4617899999998 220.22625999999997 558.29697 221.68829 C 552.40706 223.75592 542.35904 224.3898 539.1714200000001 224.3898 C 535.9838 224.38980000000004 532.79626 224.3898 526.42103 224.3898 C 520.0458700000001 224.38979999999998 520.0458700000001 224.38979999999998 516.85826 224.38979999999998 C 513.67072 224.3898 511.46029999999996 220.22623 507.29549 221.68829 C 504.35053000000005 222.7221 511.5866 226.29564 516.8582600000001 232.49435 C 521.02592 237.39488 526.42103 248.70348000000004 526.42103 256.8080299999999 C 526.42103 264.91258 526.42103 270.31559 526.42103 273.01713 C 526.42103 275.71864 523.2334899999998 281.12168 523.23349 283.82319 C 523.23349 286.52470000000005 516.85826 289.22623 516.85826 289.22623 C 513.6707200000001 289.22623 509.89017 291.09717 504.10794 294.62924000000004 C 500.45091 296.86316999999997 495.10694 301.3459200000001 488.16994 302.73379 C 481.96529 303.97515 478.60717 302.73379 475.41962 302.73379 C 469.04439 302.73379 465.85685 302.73379 462.66923 302.73379 C 462.66923 302.73379 459.23896 303.7676 456.29407000000003 302.73379 C 452.12924999999996 301.27175 446.87415 298.54873 443.54368 289.22623 C 440.77258 281.46943 441.52449 270.25487 440.35606 262.21104 C 438.75025 251.15586000000002 433.9809 248.70348 433.9809 246.00194 C 433.9809 243.30043 431.77049 236.65792 427.6057400000001 235.19588 C 424.66077999999993 234.16204 421.23051 235.19588 418.04296999999997 235.19588 C 411.6677399999999 235.19588 401.93439 233.95452 395.72981 235.19588 C 388.79287000000005 236.58375 386.16704 240.59891999999996 379.79188 246.00194 C 376.60426 248.70348 373.41665 254.10649 373.41665 254.10649 C 367.04149 256.80803 357.23606 261.1772000000001 354.2911 262.21104 C 350.12636 263.67311 343.79474999999996 271.10686999999996 341.54078 273.01713 C 337.03284 276.8376900000001 333.19787 278.6258 331.97800999999987 281.1216800000001 C 330.25291 284.65138 328.74925 286.09196 325.60277999999994 286.5246899999999 C 315.65288999999996 287.89314 312.85245999999995 289.22622999999993 309.66484999999994 289.22623 C 306.4772299999999 289.22623 300.1020799999999 286.52472 296.91446 283.82319 C 293.72692000000006 281.12167999999997 294.28877 279.80805 287.3516900000001 278.42015000000004 C 284.2494 277.79947000000004 280.97653 273.01714000000004 277.7889200000001 270.3156 C 271.4137600000001 264.91259 268.78795999999994 260.89741 261.85099 259.50954 C 258.74866 258.88886 258.66337 259.50954 258.66337 259.50954 C 258.66337 256.8080299999999 255.47579 256.80803 255.47579000000002 254.10650000000004 C 255.47578999999996 251.40499000000005 255.47578999999996 251.40499000000005 255.47579000000002 248.70349 L 255.47579000000002 248.70349 L 255.47579000000002 246.00195 L 255.47579 243.30044 L 271.41374 246.00195000000002 z"
            id="svg_3"
            stroke="#000"
            fill="#97e5ef"
          ></path>
          <g className="car" id="svg_18">
            <rect
              fill="#b2b2b2"
              stroke="#000"
              x="1565.6155180931091"
              y="459.2143859863281"
              width="161.3845283985138"
              height="26.124937057495117"
              id="svg_9"
              strokeWidth="0"
            ></rect>
            <rect
              fill="#f24d4d"
              stroke="#000"
              strokeWidth="0"
              x="1691.5742023234816"
              y="406.9645118713379"
              width="33.457768434543134"
              height="52.249874114990234"
              id="svg_14"
            ></rect>
            <ellipse
              fill="#000000"
              stroke="#000"
              cx="1596.1211794378569"
              cy="490.9375485340869"
              id="svg_16"
              rx="16.728883572076796"
              ry="13.062468751200072"
            ></ellipse>
            <ellipse
              fill="#000000"
              stroke="#000"
              cx="1673.8612032852711"
              cy="490.0045102850188"
              id="svg_17"
              rx="17.71293592643118"
              ry="13.9955016614079"
            ></ellipse>
            <rect
              fill="#ff7f00"
              stroke="#000"
              x="1561.2990324124546"
              y="453.848079143996"
              width="56.40192481707551"
              height="18.303846856118078"
              id="svg_10"
              strokeWidth="0"
              rx="5"
              transform="matrix(-1.70443, 0.933033, -0.984052, -1.61606, 4780.61, -307.329)"
            ></rect>
          </g>
          <path
            fill="#7f3f00"
            stroke="#000"
            id="svg_20"
            d="M1632,397 C1631,397 1631,396 1630,396 C1630,396 1629.7071533203125,396.70709228515625 1629,396 C1628.2928466796875,395.29290771484375 1628.81201171875,393.9739990234375 1624,391 C1621.31005859375,389.3374938964844 1620,390 1618,390 C1617,390 1617,390 1616,390 C1616,390 1615,390 1614,390 C1614,390 1613,390 1612,390 C1611,390 1609,390 1608,390 C1606,390 1604,390 1602,390 C1600,390 1599,390 1598,390 C1598,390 1597,390 1596,390 C1595,390 1595,390 1594,390 C1594,390 1593.5811767578125,390.4188537597656 1592,392 C1588.8377685546875,395.16229248046875 1585.7071533203125,395.29290771484375 1585,396 C1584.2928466796875,396.70709228515625 1584.7071533203125,397.29290771484375 1584,398 C1583.2928466796875,398.70709228515625 1583,399 1583,400 C1583,400 1583,400 1583,401 C1583,402 1582,402 1582,402 C1582,403 1581.7071533203125,403.29290771484375 1581,404 C1580.2928466796875,404.70709228515625 1580,405 1580,406 C1580,406 1580,407 1580,407 C1580,408 1580,409 1580,409 C1580,410 1580,411 1580,412 C1580,412 1580,413 1580,413 C1580,414 1580,414 1580,415 C1580,416 1580,416 1580,417 C1580,417 1580,418 1580,418 C1580,419 1580,419 1580,420 C1580,420 1580,421 1580,422 C1580,422 1580,422 1580,423 C1580,423 1580,424 1580,424 C1580,425 1580,425 1580,426 C1580,427 1580,427 1580,428 C1580,428 1580,429 1580,429 L1580,430 L1580,431 L1580,431 "
            transform="rotate(6.77242, 1606, 410.435)"
          ></path>{' '}
          <path
            fill="#7f3f00"
            stroke="#000"
            id="svg_23"
            d="M1580,401 C 1580,401,1577.0911865234375,401.1452941894531,1566,408 1561.0399169921875,411.0655212402344,1554.17626953125,414.48626708984375,1552,415 1551.0267333984375,415.2297668457031,1550.584716796875,415.1887512207031,1550,416 1548.1510009765625,418.56536865234375,1545,418,1543,419 1543,419,1542,419,1541,420 1540,421,1535.7012939453125,421.8210754394531,1534,425 1533.0562744140625,426.7633361816406,1533.5257568359375,429.14935302734375,1533,430 1531.824462890625,431.902099609375,1530.175537109375,431.097900390625,1529,433 1528.4742431640625,433.85064697265625,1527.506591796875,437.8785705566406,1527,441 1526.3592529296875,444.9483642578125,1525.506591796875,449.8785705566406,1525,453 1524.5194091796875,455.9612731933594,1525,459,1525,461 1525,465,1525,466,1525,468 1525,468,1525,469,1525,473 1525,475,1525,477,1525,479 1525,481,1525,481,1525,482 1525,483,1525,483,1524,484 1522,486,1518.9215087890625,487.78985595703125,1516,489 1513.93408203125,489.855712890625,1513,490,1513,490 1512,490,1511,490,1511,490 1511,491,1511,491,1511,493 1511,494,1511,497,1511,500 1511,502,1511,503,1511,505 1511,507,1511,508,1511,509 1511,510,1510,511,1510,513 1510,515,1510,516,1510,517 1510,518,1510,518,1510,519 1510,521,1510.869384765625,523.1287231445312,1510,526 1508.9552001953125,529.4508666992188,1506.7071533203125,529.2929077148438,1506,530 1505.2928466796875,530.7070922851562,1506,532,1506,533 1506,533,1505,533,1505,535 1505,535,1504.5411376953125,535.6934204101562,1504,537 1503.6173095703125,537.9238891601562,1504,538,1504,539 1504,540,1503,541,1503,542 1503,543,1503,543,1503,544 1503,545,1502.6925048828125,546.18603515625,1504,548 1504.826904296875,549.1472778320312,1505,550,1505,552 1505,554,1505.4862060546875,554.82373046875,1506,557 1506.229736328125,557.9732666015625,1506,559,1506,560 1506,562,1506,565,1506,567 1506,569,1506,571,1506,572 1506,574,1506,575,1506,576 1506,578,1506,579,1506,580 1506,583,1506,585,1506,587 1506,588,1506,589,1506,589 1506,590,1506,591,1506,591 1506,592,1506,593,1506,596 1506,598,1506,601,1506,602 1506,603,1506,604,1506,604 1506,605,1506,605,1506,606 1506,606,1506,607,1506,607 1506,607,1506,608,1506,608 1506,609,1506,609,1506,609 1506,610,1506.2928466796875,610.2929077148438,1507,611 1507.7071533203125,611.7070922851562,1508,612,1508,613 1508,613,1507.6934814453125,613.4588012695312,1509,614 1509.923828125,614.3826904296875,1513,613,1515,613 1518,613,1519,613,1519,613 1520,613,1521,613,1522,613 1522,613,1522.2928466796875,613.2929077148438,1523,614 1523.7071533203125,614.7070922851562,1524,614,1525,614 1525,614,1526,614,1527,614 1527,614,1528,614,1528,614 1529,614,1530,614,1531,614 1531,614,1532,614,1532,614 1533,614,1533,614,1533,614 1534,614,1534.2928466796875,613.7070922851562,1535,613 1535.7071533203125,612.2929077148438,1534.2928466796875,611.7070922851562,1535,611 1538.5355224609375,607.4644775390625,1540.2928466796875,607.7070922851562,1541,607 1541.7071533203125,606.2929077148438,1542,606,1542,606 1542,605,1542,604,1542,604 1542,603,1542,603,1542,602 1542,601,1542,600,1542,599 1542,598,1542,597,1542,596 1542,596,1541.7071533203125,595.7070922851562,1541,595 1540.2928466796875,594.2929077148438,1539.7071533203125,594.7070922851562,1539,594 1538.2928466796875,593.2929077148438,1539.3826904296875,592.9238891601562,1539,592 1537.9176025390625,589.3869018554688,1535.8096923828125,590.1184692382812,1534,587 1532.877685546875,585.0659790039062,1532.229736328125,582.9732666015625,1532,582 1531.4862060546875,579.82373046875,1531,579,1530,577 1530,577,1530,576,1530,575 1530,574,1530,573,1530,573 1530,570,1530,566,1530,564 1530,562,1530,561,1530,561 1530,560,1530,559,1530,559 1530,558,1530,557,1530,555 1530,552,1530,546,1530,542 1530,540,1530,537,1530,535 1530,534,1530,534,1530,533 1530,532,1529.2928466796875,531.7070922851562,1530,531 1530.7071533203125,530.2929077148438,1531,530,1532,529 1532,529,1532,528,1532,527 1532,526,1532,525,1532,525 1532,523,1532.493408203125,522.1214599609375,1533,519 1533.4805908203125,516.0387573242188,1533.5413818359375,512.2973022460938,1535,509 1536.66796875,505.2293701171875,1536.173095703125,504.14727783203125,1537,503 1538.3074951171875,501.1860046386719,1537.097900390625,498.1755676269531,1539,497 1539.8507080078125,496.4742736816406,1540,496,1541,494 1542,492,1542,492,1542,490 1542,489,1542,489,1542,488 1542,485,1542,484,1542,483 1542,481,1542,480,1542,477 1542,475,1541,472,1541,470 1541,469,1541,469,1541,468 1541,467,1541,463,1541,460 1541,457,1541.54052734375,454.9465026855469,1542,453 1542.5137939453125,450.8237609863281,1543,450,1543,450 1545,446,1544.824462890625,442.902099609375,1546,441 1548.628662109375,436.7467346191406,1550,436,1551,436 1551,436,1551.076171875,436.3826904296875,1552,436 1554.6131591796875,434.9176025390625,1556,432,1559,431 1562,430,1564.076171875,430.3826904296875,1565,430 1566.3065185546875,429.45880126953125,1566,429,1567,429 1568,429,1569,429,1569,429 1570,429,1571.2928466796875,429.70709228515625,1572,429 1572.7071533203125,428.29290771484375,1572.2928466796875,427.70709228515625,1573,427 1573.7071533203125,426.29290771484375,1572.5858154296875,425.4142150878906,1574,424 1574.7071533203125,423.29290771484375,1575.4588623046875,424.3065490722656,1576,423 1576.3826904296875,422.07611083984375,1576.789794921875,421.92156982421875,1578,419 1578.855712890625,416.93414306640625,1580,417,1580,416 1580,415,1580,414,1580,413 1580,413,1580,411,1580,410 1580,410,1580,409,1580,409 1580,408,1580,408,1580,407 1580,407,1580,406,1580,406 L 1580,405 1580,405 1580,404"
            strokeWidth="0"
          ></path>
          <path
            transform="rotate(-.08 976.138 964.663)"
            stroke="#000"
            fill="url(#a)"
            d="M13.485 883.617H1938.79v162.091H13.485z"
          />
          <path
            transform="matrix(.00383 2.7545 -2.37917 .0033 2134.392 -203.548)"
            stroke="#000"
            fill="url(#b)"
            d="M294.039 90.563h214.667v808H294.039z"
          />
          <path
            stroke="#000"
            fill="#999"
            d="m1716.83 523.998 28.689-.04.12 86.449-28.688.04zM1780.586 526.61l28.688-.04.12 86.449-28.688.04zM1640.325 521.402l35.063-.048.12 86.449-35.063.048zM1853.9 526.508l35.064-.048.12 86.449-35.063.048z"
          />
          <path
            stroke="#000"
            fill="#e5e5e5"
            d="m1566.988 505.295 357.01-.496.026 18.91-357.01.497z"
          />
          {/* <path className="truck-on-dock" stroke="#000" fill="#f98e2a" d="m1546.529 424.078 150.35-54.723 23.258 63.899-150.35 54.723z" /> */}
          <defs style={style}>
            <linearGradient
              style={style}
              y2="0"
              x2="1"
              y1="0"
              x1="0"
              id="b"
            >
              <stop style={style} offset="0" stopColor="#5ec2dc" />
              <stop
                style={style}
                offset=".996"
                stopOpacity=".992"
                stopColor="#4458ed"
              />
              <stop
                style={style}
                offset="1"
                stopOpacity=".996"
                stopColor="#96d1df"
              />
              <stop
                style={style}
                offset="NaN"
                stopOpacity="0"
                stopColor="0"
              />
              <stop
                style={style}
                offset="NaN"
                stopOpacity="0"
                stopColor="0"
              />
              <stop
                style={style}
                offset="NaN"
                stopOpacity="0"
                stopColor="0"
              />
              <stop
                style={style}
                offset="NaN"
                stopOpacity="0"
                stopColor="0"
              />
              <stop
                style={style}
                offset="NaN"
                stopOpacity="0"
                stopColor="0"
              />
              <stop
                style={style}
                offset="NaN"
                stopOpacity="0"
                stopColor="0"
              />
              <stop
                style={style}
                offset="NaN"
                stopOpacity="0"
                stopColor="0"
              />
              <stop
                style={style}
                offset="NaN"
                stopOpacity="0"
                stopColor="0"
              />
              <stop
                style={style}
                offset="NaN"
                stopOpacity="0"
                stopColor="0"
              />
              <stop
                style={style}
                offset="NaN"
                stopOpacity="0"
                stopColor="0"
              />
              <stop
                style={style}
                offset="NaN"
                stopOpacity="0"
                stopColor="0"
              />
              <stop
                style={style}
                offset="NaN"
                stopOpacity="0"
                stopColor="0"
              />
              <stop
                style={style}
                offset="NaN"
                stopOpacity="0"
                stopColor="0"
              />
              <stop
                style={style}
                offset="NaN"
                stopOpacity="0"
                stopColor="0"
              />
              <stop
                style={style}
                offset="NaN"
                stopOpacity="0"
                stopColor="0"
              />
              <stop
                style={style}
                offset="NaN"
                stopOpacity="0"
                stopColor="0"
              />
              <stop
                style={style}
                offset="NaN"
                stopOpacity="0"
                stopColor="0"
              />
              <stop
                style={style}
                offset="NaN"
                stopOpacity="0"
                stopColor="0"
              />
              <stop
                style={style}
                offset="NaN"
                stopOpacity="0"
                stopColor="0"
              />
            </linearGradient>
          </defs>
        </svg>
      </>
    </section>
  );
}