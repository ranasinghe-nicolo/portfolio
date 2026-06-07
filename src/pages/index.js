import React from 'react';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <main style={{maxWidth: '960px', margin: '0 auto', padding: '40px 20px'}}>
      <section style={{textAlign: 'center', marginBottom: '48px'}}>
        <p style={{fontSize: '0.9rem', color: '#6b7280', marginBottom: '12px'}}>Portfolio personale</p>
        <h1 style={{fontSize: 'clamp(2.5rem, 4vw, 4rem)', margin: '0 0 16px'}}>Nicolò Ranasinghe</h1>
        <p style={{fontSize: '1.15rem', lineHeight: '1.8', maxWidth: '760px', margin: '0 auto'}}>
          Trainee SysOps/DevOps con esperienza in ambienti Linux, containerizzazione e infrastrutture Kubernetes.
          Qui trovi il mio percorso professionale, le tecnologie che utilizzo e i progetti in cui ho lavorato.
        </p>
      </section>

      <section style={{display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))'}}>
        <article style={{border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px', background: '#ffffff'}}>
          <h2>Chi sono</h2>
          <p>System Administrator e SysOps/DevOps in formazione, proattivo, curioso e orientato all'apprendimento continuo.</p>
          <Link className="button button--primary" to="/docs/intro">Vai a Intro</Link>
        </article>

        <article style={{border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px', background: '#ffffff'}}>
          <h2>Tecnologie</h2>
          <p>Linux, Docker, Kubernetes, Proxmox, Ansible, Terraform, Icinga, GitLab, N8N e cloud-native.</p>
          <Link className="button button--primary" to="/docs/technologies">Scopri le tecnologie</Link>
        </article>

        <article style={{border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px', background: '#ffffff'}}>
          <h2>Esperienze</h2>
          <p>Supporto L2 Kubernetes, manutenzione cluster, monitoraggio Icinga e gestione sistemi Linux in ambienti di produzione.</p>
          <Link className="button button--primary" to="/docs/experience">Vedi le esperienze</Link>
        </article>

        <article style={{border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px', background: '#ffffff'}}>
          <h2>Progetti</h2>
          <p>Progetti tecnici su automazione, containerizzazione, monitoraggio e integrazione di sistemi con tecnologie moderne.</p>
          <Link className="button button--primary" to="/docs/my-projects">Vedi i progetti</Link>
        </article>

        <article style={{border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px', background: '#ffffff'}}>
          <h2>Contatti</h2>
          <p>LinkedIn, email e riferimenti per collaborazioni e opportunità professionali.</p>
          <Link className="button button--primary" to="/docs/contact">Contattami</Link>
        </article>
      </section>
    </main>
  );
}
