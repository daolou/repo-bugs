import React, { useEffect } from 'react';
import styles from './index.less';
import {useRequest} from 'umi';
import Services from './service';

enum EType {
  SILENT,
  skipErrorRequest
}

export default () => {

  const handleFetch = (type: EType)=> {
    switch (type) {
      case EType.SILENT:
        return Services.SILENT()
      case EType.skipErrorRequest:
        return Services.skipErrorRequest()
    }
  }
  const { run } = useRequest(
    (type) => handleFetch(type),
    {
      manual: true,
      formatResult: res => res,
    },
  );
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div className={styles.box}>
        <pre><code>
          {`errorConfig: {
            adaptor: resData => {
              return {
                ...resData,
                showType: ErrorShowType.SILENT,
              };
            },
          }`}
        </code></pre>
        <h4>这个请求会有message错误提示</h4>
        <button onClick={()=>run(EType.SILENT)}>Fetch: SILENT</button>
      </div>
      <div className={styles.box}>
        <pre><code>
          {`request(url, { ...options, skipErrorHandler: true })`}
        </code></pre>
        <h4>这个请求没有message错误提示</h4>
        <button onClick={()=>run(EType.skipErrorRequest)}>Fetch: skipErrorRequest</button>
      </div>

    </div>
  );
}
