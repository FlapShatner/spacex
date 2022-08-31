export default function Button({ children, style }) {
  return (
    <>
      <div className='btn'>{children}</div>
      <style jsx>
        {`
          .btn {
            display: flex;
            width: max-content;
            font-weight: var(--fw-semibold);
            font-size: var(--fs-small);
            background-image: linear-gradient(#fff, #fff);
            background-size: 100% 0;
            background-position: top;
            background-repeat: no-repeat;
            border: 2px solid #fff;
            padding: 0.9rem;
            transition: 0.3s, background-position 0s;
            ${style}
          }

          .btn:hover {
            background-size: 100% 100%;
            background-position: bottom;
            color: black;
            font-weight: var(--fw-semibold);
          }
        `}
      </style>
    </>
  )
}
