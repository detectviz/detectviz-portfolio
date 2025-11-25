import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'ipoc-platform',
    period: '2022/04 ~ 2025/04',
    title: '企業級自動化效能監控平台開發',
    category: '平台開發 (Software & Platform Engineering)',
    images: [
      'ipoc-platform-flowchart.png',
      'ipoc-sysload-overview.png',
      'ipoc-server-group.png',
      'ipoc-process-monitor.png',
      'ipoc-history-analysis.png',
      'ipoc-oracle-kpi-overview.png',
      'ipoc-iis-service-status.png',
      'ipoc-iis-service-uri-request.png',
    ],
    technologies: [
      { name: 'Golang', icon: 'golang' },
      { name: 'Bash', icon: 'shell' },
      { name: 'InfluxDB', icon: 'influxdb' },
      { name: 'Grafana', icon: 'grafana' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Keycloak', icon: 'keycloak' }
    ],
    description: '從零到一主導開發的企業級自動化監控平台',
    content: '針對企業 IT 環境異質性與數據孤島痛點，主導開發企業級自動化效能監控平台。克服每日數億筆時序數據處理與跨平台 (AIX/Windows/Linux) 採集挑戰。採用 Agentless 架構大幅降低部署成本，並運用 Golang 高併發特性優化 ETL 效能。成功導入台泥儲能等 10+ 重點客戶，建立 50+ 套標準化儀表板，提升交付效率 80% 並維持 99.9% 系統可用性。',
    display: true
  },
  {
    id: 'tsmc-pdu-monitor',
    period: '2022/11 ~ 2025/04',
    title: '台積電資料中心 PDU 電力監控系統',
    category: '平台開發 (Software & Platform Engineering)',
    images: [
      'tsmc-pdu-monitor-flowchart.png',
      'tsmc-pdu-monitor-spc-by-pdu.png',
      'tsmc-pdu-monitor-spc-alert-rule.png',
      'tsmc-pdu-monitor-by-branch.png',
      'tsmc-pdu-monitor-by-panel.png',
      'tsmc-pdu-monitor-by-rack.png'
    ],
    technologies: [
      { name: 'InfluxDB', icon: 'influxdb' },
      { name: 'Grafana', icon: 'grafana' },
      { name: 'Telegraf', icon: 'influxdb' },
      { name: 'SNMP', icon: 'snmp' },
      { name: 'Modbus', icon: 'modbus' },
      { name: 'Bash', icon: 'shell' }
    ],
    description: '為台積電打造的集中化 PDU 電力監控系統',
    content: '為滿足台積電資料中心對電力穩定性的高標準要求，整合數百支異質 PDU (SNMP/Modbus) 數據。設計從 Room 到 Branch 的 5 層式階層架構，並開發客製化 Grafana 儀表板。系統具備即時負載追蹤與三相不平衡偵測功能，協助維運團隊主動識別潛在風險，顯著提升機房營運穩定性與管理效率。',
    display: true
  },
  {
    id: 'tcci-influxdb-redis',
    period: '2024/07 ~ 2024/09',
    title: '台泥儲能高可用性 InfluxDB 監控架構',
    category: '平台開發 (Software & Platform Engineering)',
    images: [
      'tcci-influxdb-redis-flowchart.png',
      'tcci-influxdb-redis-dashboard.png'
    ],
    technologies: [
      { name: 'Grafana', icon: 'grafana' },
      { name: 'InfluxDB', icon: 'influxdb' },
      { name: 'Redis', icon: 'redis' },
      { name: 'Golang', icon: 'golang' }
    ],
    description: '基於 InfluxDB 與 Redis 緩衝架構的高可用性監控平台',
    content: '針對台泥儲能對金融級數據完整性的嚴格要求，建置高可用 (HA) 監控平台。為解決網路不穩導致的數據遺失風險，設計以 Redis Stream 為核心的緩衝機制 (Buffer Mechanism)，並以 Golang 開發 redis2influx 服務確保數據寫入的可靠性。成功交付一套零資料遺失 (Zero Data Loss)、具備彈性容錯能力的監控架構。',
    display: true
  },
  {
    id: 'innolux-influxdb-platform',
    period: '2024/09 ~ 2024/11',
    title: '大規模工業物聯網 (IIoT) 數據整合平台',
    category: '平台開發 (Software & Platform Engineering)',
    images: [
      'innolux-influxdb-evaluation-flowchart.png',
      'innolux-influxdb-evaluation-remote-write-request.png',
      'innolux-influxdb-evaluation-remote-error-count.png',
      'innolux-influxdb-size-monitor.png'
    ],
    technologies: [
      { name: 'InfluxDB', icon: 'influxdb' },
      { name: 'Grafana', icon: 'grafana' },
      { name: 'Golang', icon: 'golang' },
      { name: 'Prometheus', icon: 'prometheus' }
    ],
    description: '針對大規模工業物聯網數據的 InfluxDB 架構設計與壓力測試',
    content: '為驗證 InfluxDB 處理大規模 IIoT 數據的極限，主導科技廠房 PoC 專案。挑戰在於精準模擬數萬個 Sensor 的高併發寫入場景。自主開發支援多模式與重試機制的 Golang 壓力測試工具，取代制式方案。透過 Grafana 建立完整觀測體系 (Write Request/Error Count)，成功量化系統極限與延遲表現，為客戶提供具數據支撐的容量規劃與架構優化建議。',
    display: true
  },
  {
    id: 'his-monitor-platform',
    period: '2023/06 ~ 2023/12',
    title: '醫療資訊系統 (HIS) 全端可觀測性平台',
    category: '數據整合 (Data Pipeline Engineering)',
    images: [
      'his-monitor-flowchart.png',
      'his-server-monitor-windows-and-linux.png',
      'his-server-monitor-linux-and-hpux.png',
      'his-server-monitor-cpu.png',
      'his-oracle-monitor-metrics.png',
      'his-oracle-monitor-connections.png',
      'his-oracle-monitor-sql-statistics.png'
    ],
    technologies: [
      { name: 'AIX', icon: 'aix' },
      { name: 'Windows Server', icon: 'windows' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Oracle', icon: 'oracle' },
      { name: 'InfluxDB', icon: 'influxdb' },
      { name: 'Grafana', icon: 'grafana' }
    ],
    description: '整合 5 種作業系統與 7 種日誌格式的醫療資訊系統監控方案',
    content: '面對 HIS 系統複雜的異質環境，需整合 AIX/Windows/Linux 等 5 種作業系統與 Oracle/IIS 服務。克服 NMON, AWR 等 7 種日誌格式標準化難題。開發自動化 ETL 腳本清洗數據並寫入 InfluxDB，建立 10+ 張跨層次關聯分析儀表板。成功識別磁碟耗盡、備份異常等 20+ 項關鍵隱憂，實現從基礎設施到應用層 (OS to Application) 的端到端可觀測性。',
    display: true
  },
  {
    id: 'wiadvance-db-monitor',
    period: '2023/01 ~ 2023/06',
    title: 'Oracle & SQL Server 雙資料庫健檢平台',
    category: '數據整合 (Data Pipeline Engineering)',
    images: [
      'wiadvance-db-monitor-flowchart.png',
      'wiadvance-oracle-overview.png',
      'wiadvance-oracle-dbtime-overview.png',
      'wiadvance-oracle-sql-statistics.png',
      'wiadvance-oracle-table-space.png',
      'wiadvance-sqlserver-overview.png',
      'wiadvance-sqlserver-sql-statistics.png'
    ],
    technologies: [
      { name: 'Oracle', icon: 'oracle' },
      { name: 'SQL Server', icon: 'sqlserver' },
      { name: 'InfluxDB', icon: 'influxdb' },
      { name: 'Grafana', icon: 'grafana' },
      { name: 'Telegraf', icon: 'influxdb' }
    ],
    description: '與緯謙科技合作的雙資料庫健檢平台，實現非侵入式監控',
    content: '與緯謙科技合作，為 OCI 客戶打造 Oracle 與 SQL Server 雙資料庫健檢服務。在嚴格的資安規範下，設計 FTP chroot 隔離機制與自動化日誌解析引擎，整合 Telegraf 實現非侵入式 (Agentless) 監控。將晦澀的 AWR 報告與效能計數器轉化為直觀的 Top SQL 與 Wait Events 儀表板，賦予客戶 DBA 等級的數據洞察能力，有效提升資料庫效能診斷效率。',
    links: [
      { url: 'https://www.wiadvance.com/solutions-article/database-monitoring-BiMAP-iPOC/', name: '異業合作連結' }
    ],
    display: true
  },
  {
    id: 'cathaybk-influxdb-healthcheck',
    period: '2023/10 ~ 2023/11',
    title: '國泰金控 InfluxDB 效能調校與容量規劃',
    category: '效能分析 (Performance Engineering)',
    images: [
      'cathaybk-influxdb-tuning-flowchart.png',
      'cathaybk-influxdb-tuning-bucket-size-total.png',
      'cathaybk-influxdb-tuning-bucket-size-and-serise.png',
      'cathaybk-influxdb-bucket-size-weekly.png'
    ],
    technologies: [
      { name: 'InfluxDB', icon: 'influxdb' },
      { name: 'Grafana', icon: 'grafana' },
      { name: 'Prometheus', icon: 'prometheus' },
      { name: 'Bash', icon: 'shell' },
      { name: 'Linux', icon: 'linux' }
    ],
    description: '金融級系統的 InfluxDB 容量規劃與異常排查',
    content: '針對國泰金控正式環境執行 InfluxDB 深度健檢。挑戰在於不影響服務的前提下，識別效能瓶頸與異常根因。透過 7 天基準線 (Baseline) 監控，深入分析 High Cardinality Tag 對記憶體與索引的影響。提出具體的 Tag Schema 優化與維運 SOP 建議，有效解決效能隱憂，確保金融級核心系統的長期穩定運作。',
    display: true
  },
  {
    id: 'newa-informix-healthcheck',
    period: '2023/12 ~ 2024/01',
    title: '核心系統 AIX & Informix\n深度效能診斷',
    category: '效能分析 (Performance Engineering)',
    images: [
      'newa-aix-informix-flowchart.png',
      'newa-aix-process.png',
      'newa-informix-onstat-metrics.png',
      'newa-informix-sql-statistics.png'
    ],
    technologies: [
      { name: 'AIX', icon: 'aix' },
      { name: 'Unix', icon: 'linux' },
      { name: 'Grafana', icon: 'grafana' },
      { name: 'InfluxDB', icon: 'influxdb' }
    ],
    description: 'AIX 伺服器與 Informix 資料庫的深度效能診斷',
    content: '為產險公司核心系統執行 AIX 與 Informix 資料庫深度健檢。從海量日誌中挖掘潛在風險，透過整合分析 NMON 與 onstat 數據，精準識別出 I/O 瓶頸、磁碟空間耗盡、異常程序滯留 (Zombie Process) 及備份排程衝突等 20+ 項關鍵問題。提供包含資源配置優化與排程調整在內的具體改善方案，有效預防系統中斷風險。',
    display: true
  },
  {
    id: 'alpha-pure-storage-performance',
    period: '2024/07 ~ 2024/08',
    title: 'Pure Storage 儲存效能驗證與壓力測試',
    category: '效能分析 (Performance Engineering)',
    images: [
      'alpha-pure-storage-flowchart.png',
      'alpha-topsql-system-metrics.png',
      'alpha-stress-test-chart.png',
      'alpha-scp-test-chart.png'
    ],
    technologies: [
      { name: 'Pure Storage', icon: 'pure-storage' },
      { name: 'AIX', icon: 'aix' },
      { name: 'InfluxDB', icon: 'influxdb' },
      { name: 'Grafana', icon: 'grafana' },
      { name: 'Bash', icon: 'shell' }
    ],
    description: '儲存系統升級前後的效能驗證與壓力測試報告',

    content: '協助客戶驗證 Pure Storage 升級效益，挑戰在於解釋架構改變導致的硬碟 Busy% 上升現象。透過深度數據分析，證實雖然 Busy% 增加，但讀取吞吐量 (Throughput) 提升 375%、IOPS 提升 39%，成功消除客戶疑慮。進一步執行 dd 與 scp 壓力測試量化 I/O 與網路極限，並據此提出負載分散與備份排程優化的專業建議，確保新系統發揮最大效能。',
    display: true
  },
  {
    id: 'cht-apache',
    period: '2022/06 ~ 2022/07',
    title: '電信影音平台 Apache Log 分析',
    category: '數據整合 (Data Pipeline Engineering)',
    images: [
      'cht-apache-flowchart.png',
      'cht-apache-performance.png',
      'cht-apache-errors.png',
      'cht-apache-ip.png',
      'cht-apache-method.png'
    ],
    technologies: [
      { name: 'ELK', icon: 'elastic' },
      { name: 'Apache', icon: 'linux' }
    ],
    description: '針對每日 3,000 萬筆 Apache Log 的深度分析與視覺化監控',
    content: '針對電信影音平台 (VSM APs) 每日高達 3,000 萬筆的 Apache Access Log，導入 Elastic Stack (ELK) 進行大數據分析。透過 Logstash 建立高效的資料清洗與標準化 Pipeline，將非結構化日誌轉為可查詢的指標數據存入 Elasticsearch。利用 Kibana 建置多維度視覺化儀表板，實時監控使用者地理分佈、HTTP 狀態碼與回應時間。成功識別 Top N 慢速 API 與異常連線行為，為系統優化與流量調度提供強而有力的數據支持。',
    display: true
  },
  {
    id: 'ntu-influxdb-grafana-training',
    period: '2023/07',
    title: '國立臺灣大學 InfluxDB &\nGrafana 技術研討會',
    category: '教育訓練 (Education & Training)',
    images: [
      'ntu-course-flowchart.png',
      'ntu-course-website-info.png',
      'ntu-course-user-total.png',
      'ntu-course-data-flow.png',
      'ntu-course-influxdb-ui.png',
      'ntu-course-grafana-query.png'
    ],
    technologies: [
      { name: 'Grafana', icon: 'grafana' },
      { name: 'InfluxDB', icon: 'influxdb' },
      { name: 'Telegraf', icon: 'influxdb' }
    ],
    description: '擔任國立臺灣大學技術研討會講師，教授時序資料庫應用',

    content: '受邀擔任台大計算機中心技術研討會講師，挑戰在 3 小時內帶領 70+ 位學員掌握時序資料庫應用。精心設計涵蓋 TSDB 原理、Telegraf 採集、Flux 查詢到 Grafana 儀表板實作的 8 大模組課程。透過循序漸進的教學與實機演練 (Hands-on Lab)，成功協助學員跨越技術門檻，建立數據視覺化與監控告警的實戰能力，達成技術推廣與知識傳承的目標。',
    links: [
      { url: 'https://my.ntu.edu.tw/actregister/sessionView.aspx?actID=20232204_04&sesID=3', name: '課程連結' }
    ],
    display: true
  },
  {
    id: 'detectviz-twgcb-auto',
    period: '2025/09',
    title: '政府組態基準 (GCB) 自動化合規框架',
    category: '個人專案 (Side Projects)',
    images: [
      'detectviz-twgcb-auto-flowchart.png'
    ],
    technologies: [
      { name: 'Bash', icon: 'shell' },
      { name: 'Linux', icon: 'linux' },
      { name: 'RHEL', icon: 'linux' }
    ],
    description: '開源的 TWGCB 合規性自動化檢查與修復工具',

    content: '鑑於人工執行台灣政府組態基準 (TWGCB) 耗時且易錯，開發開源自動化合規框架。採用模組化 Bash Shell 架構，將 200+ 條 RHEL 9 安全規範轉化為可執行的 Check/Apply 雙模式腳本。實作完整的日誌稽核系統，不僅大幅縮短合規設定時間 (由數天縮短至數分鐘)，更確保了操作的可追溯性與一致性，為系統管理者提供高效且可靠的資安合規工具。',
    repo: 'https://github.com/detectviz/twgcb-auto',
    display: true
  },
  {
    id: 'detectviz-api-tracker',
    period: '2025/10',
    title: 'API Endpoint 演進追蹤與視覺化工具',
    category: '個人專案 (Side Projects)',
    images: [
      'detectviz-api-tracker-flowchart.png',
      'detectviz-api-tracker-dashboard.png',
    ],
    technologies: [
      { name: 'Golang', icon: 'golang' },
      { name: 'Git', icon: 'git' },
      { name: 'Bash', icon: 'shell' },
      { name: 'Grafana', icon: 'grafana' }
    ],
    description: '基於 Git 歷史與 Grafana 的 API 演進追蹤解決方案',

    content: '針對 API 版本管理與演進追蹤需求，開發輕量級視覺化工具。挑戰在於不依賴複雜資料庫即可展示歷史軌跡。利用 Git blame 分析 Swagger 文件變更，結合 Golang 開發零依賴 HTTP Server 輸出 CSV 數據。整合 Grafana Infinity Plugin，創新地實現了 API 新增趨勢與負責人的即時視覺化，有效協助團隊識別技術債與規劃版本迭代。',
    repo: 'https://github.com/detectviz/api-endpoint-git-tracker-go',
    display: true
  },
  {
    id: 'detectviz-gitops',
    period: '2025/11',
    title: '全流程 GitOps 基礎設施自動化平台',
    category: '個人專案 (Side Projects)',
    images: [
      'detectviz-gitops-flowchart.png'
    ],
    technologies: [
      { name: 'GitOps', icon: 'git' },
      { name: 'Terraform', icon: 'terraform' },
      { name: 'Ansible', icon: 'ansible' },
      { name: 'ArgoCD', icon: 'argocd' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Vault', icon: 'shell' }
    ],
    description: '整合 Terraform, Ansible, ArgoCD 的全流程 IaC 自動化平台',

    content: '為展示企業級雲原生基礎設施實踐能力，建構從 KVM 虛擬機 (Terraform) 到 Kubernetes (Ansible) 再到應用交付 (Argo CD) 的全流程自動化平台。挑戰在於整合複雜工具鏈與安全機制。實作完整的 GitOps 流程，深度整合 Vault 秘密管理、Keycloak OIDC 認證及 Prometheus/Loki/Tempo 可觀測性堆疊，打造現代化、安全且可觀察的基礎設施範本。',
    repo: 'https://github.com/detectviz/detectviz-gitops',
    display: true
  }
];
